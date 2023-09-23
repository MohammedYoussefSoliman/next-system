import React from "react";
import { useRouter } from "next/navigation";
import loGet from "lodash/get";
import { Button } from "@/components/Button";
import { EmailField } from "@components/Inputs";
import { useAppDispatch, useAxiosInstance } from "@/hooks";
import { getResponseMessage, formDataHandler } from "@/utils";
import { showError, showSuccess } from "@appState/slices/ui-actions";
import { setUserEmail } from "@/appState/slices/auth";
import Form from "@components/Form";

type EmailFormProps = {
  mode: "email" | "phone";
};

export default function EmailForm({ mode }: EmailFormProps) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const { post } = useAxiosInstance();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const onSubmit = React.useCallback(
    async (data: any) => {
      setIsSubmitting(true);
      dispatch(setUserEmail(data.email));
      const formData = {
        email: mode === "email" ? loGet(data, mode, "") : undefined,
        phone: mode === "phone" ? loGet(data, mode, "") : undefined,
        type: mode,
        cause: "password",
      };

      try {
        const response = await post("send-otp-code", formDataHandler(formData));
        dispatch(showSuccess(getResponseMessage(response.data)));
        route.push("forget-password/reset");
      } catch (err) {
        const messages = getResponseMessage(err as any, true);
        dispatch(showError(messages));
      } finally {
        setIsSubmitting(false);
      }
    },
    [dispatch, mode, post, route]
  );

  return (
    <Form onSubmit={onSubmit}>
      {({ control }) => (
        <div className="flex flex-col gap-6 w-full">
          <EmailField name="email" label="email" control={control} required />
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
