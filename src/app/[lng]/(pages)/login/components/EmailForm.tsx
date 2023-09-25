import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { PasswordField, EmailField } from "@components/Inputs";
import { useAppDispatch, useDeviceInfo } from "@/hooks";
import loginService from "@appState/slices/auth/loginService";
import Form from "@components/Form";
import Link from "@/components/Link";

export default function EmailForm() {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const deviceInfo = useDeviceInfo();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const onSubmit = React.useCallback(
    async (data: any) => {
      setIsSubmitting(true);
      const formData = {
        ...data,
        login_type: "email",
        type_2fa: "email",
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
    <Form onSubmit={onSubmit}>
      {({ control }) => (
        <div className="flex flex-col gap-4 w-full">
          <EmailField name="email" label="email" control={control} required />
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
