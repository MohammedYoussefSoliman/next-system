import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { PasswordField, TextField, DialCode } from "@components/Inputs";
import { useAppDispatch, useDeviceInfo } from "@/hooks";
import loginService from "@appState/slices/auth/loginService";
import Form from "@components/Form";
import Link from "@/components/Link";

export default function PhoneNumberForm() {
  const dispatch = useAppDispatch();
  const deviceInfo = useDeviceInfo();
  const route = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const onSubmit = React.useCallback(
    async (data: any) => {
      setIsSubmitting(true);
      const formData = {
        ...data,
        country_code: +data.country_code.substring(1),
        login_type: "phone",
        type_2fa: "phone",
        code_2fa: 0,
        ...deviceInfo,
      };

      dispatch(
        loginService({
          formData,
          setLoading(value) {
            setIsSubmitting(value);
          },
          showSuccessMessage: true,
          onSuccess() {
            route.push("/");
          },
        })
      );
    },
    [deviceInfo, dispatch, route]
  );

  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={{
        country_code: "+971",
      }}
    >
      {({ control, setValue }) => (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <div className="grow">
              <TextField
                name="phone"
                label="phoneNumber"
                namespace="register"
                type="number"
                validationRules={{
                  minLength: {
                    value: 9,
                    message: "phoneNumberMinLength",
                  },
                  maxLength: {
                    value: 12,
                    message: "phoneNumberMaxLength",
                  },
                }}
                control={control}
                required
              />
            </div>
            <DialCode
              control={control}
              changeHandler={(country) => setValue("country_key", country.code)}
            />
          </div>
          <PasswordField
            control={control}
            name="password"
            label="password"
            validationRules={{
              minLength: {
                value: 6,
                message: "passwordMinLength",
              },
            }}
            required
          />
          <Link
            to="/forget-password"
            label="forgetPassword"
            capitalizeFirstLetter
          />
          <Link to="/forget-email" label="forgetEmail" capitalizeFirstLetter />

          <Button
            loading={isSubmitting}
            size="large"
            className="capitalize pt-4"
          >
            logIn
          </Button>
        </div>
      )}
    </Form>
  );
}
