import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { DialCode, TextField } from "@components/Inputs";
import { useAppDispatch, useAxiosInstance } from "@/hooks";
import { getResponseMessage, formDataHandler } from "@/utils";
import { showError, showSuccess } from "@appState/slices/ui-actions";
import { setUserEmail } from "@/appState/slices/auth";
import Form from "@components/Form";

export default function PhoneNumberForm() {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const { post } = useAxiosInstance();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const onSubmit = React.useCallback(
    async (data: any) => {
      setIsSubmitting(true);
      dispatch(setUserEmail(data.email));
      const formData = {
        phone: data.phone,
        country_code: +data.country_code.substring(1),
      };

      try {
        const response = await post("forget-email", formDataHandler(formData));
        dispatch(showSuccess(getResponseMessage(response.data)));
        route.push("login");
      } catch (err) {
        const messages = getResponseMessage(err as any, true);
        dispatch(showError(messages));
      } finally {
        setIsSubmitting(false);
      }
    },
    [dispatch, post, route]
  );

  return (
    <Form
      defaultValues={{
        country_code: "+971",
      }}
      onSubmit={onSubmit}
    >
      {({ control, setValue }) => (
        <div className="flex flex-col gap-6 w-full">
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
          <Button
            loading={isSubmitting}
            size="large"
            className="capitalize pt-4"
          >
            send
          </Button>
        </div>
      )}
    </Form>
  );
}
