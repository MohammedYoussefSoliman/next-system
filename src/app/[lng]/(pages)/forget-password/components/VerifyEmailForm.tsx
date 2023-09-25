"use client";
import React from "react";
import loGet from "lodash/get";
import Form from "@components/Form";
import Divider from "@components/Divider";
import { useRouter } from "next/navigation";
import { PasswordField } from "@components/Inputs";
import CountDown from "@/components/CountDown";
import { Button } from "@/components/Button";
import Typography from "@components/Typography";
import { ConfirmModal } from "@/components/Modal";
import { OTPInput } from "@/components/Inputs";
import { getResponseMessage, formDataHandler } from "@/utils";
import {
  useAuth,
  useAppDispatch,
  useAxiosInstance,
  useAppSelector,
} from "@/hooks";
import { showError, showSuccess } from "@appState/slices/ui-actions";

export default function VerifyComponent() {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.ui);
  const route = useRouter();
  const { user } = useAuth();
  const { post } = useAxiosInstance();
  const [otp, setOtp] = React.useState<string | null>(null);
  const [resend, setResend] = React.useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] =
    React.useState<boolean>(false);
  const [sendingOtp, setSendingOtp] = React.useState<boolean>(false);
  const [resendingOtp, setResendingOtp] = React.useState<boolean>(false);

  console.log(user);

  const sendOTP = React.useCallback(
    async (data: any) => {
      const formData = {
        email: loGet(user, "email", undefined),
        type: "email",
        cause: "password",
        code: otp ? +otp : "",
        password: data.password,
      };
      setSendingOtp(true);
      try {
        const response = await post(
          "reset-password",
          formDataHandler(formData)
        );
        dispatch(showSuccess(getResponseMessage(response.data)));
        route.push(`/${language}/login`);
      } catch (err) {
        const messages = getResponseMessage(err as any, true);
        dispatch(showError(messages));
      } finally {
        setSendingOtp(false);
      }
    },
    [user, otp, post, dispatch, route, language]
  );

  const resendOTP = React.useCallback(
    async (email: string) => {
      const formData = {
        email,
        type: "email",
        cause: "password",
      };
      setResendingOtp(true);

      try {
        const response = await post("send-otp-code", formData);
        dispatch(showSuccess(getResponseMessage(response.data)));
        route.push("/login");
      } catch (err) {
        const messages = getResponseMessage(err as any, true);
        dispatch(showError(messages));
      } finally {
        setResend(false);
        setResendingOtp(false);
      }
    },
    [dispatch, post, route]
  );
  return (
    <>
      <Form onSubmit={sendOTP} className="flex flex-col gap-4  w-full">
        {({ control, setValue, getValues }) => (
          <>
            <OTPInput
              name="otp"
              codeLength={6}
              onFinish={(otp) => setOtp(otp)}
              setValue={setValue}
            />
            <div className="flex w-full items-center justify-between">
              <Button
                disabled={!resend}
                className="py-2 px-2"
                variant="transparent"
                type="button"
                loading={resendingOtp}
                onClick={() => {
                  setOpenConfirmModal(true);
                }}
              >
                resendCode
              </Button>
              <CountDown
                timeInSeconds={120}
                onFinish={() => {
                  setResend(true);
                }}
                reset={!resend}
              />
            </div>
            <Divider type="horizontal" />
            <div className="flex flex-col w-full my-4 justify-center items-center gap-4">
              <Typography as="h3" text="newPassword" />
              <Typography text="newPasswordStatement" color="light" />
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
              showStrength
              required
            />
            <PasswordField
              control={control}
              name="confirmPassword"
              label="confirmPassword"
              validationRules={{
                minLength: {
                  value: 6,
                  message: "passwordMinLength",
                },
              }}
              required
            />
            <Button
              loading={sendingOtp}
              namespace="register"
              size="large"
              className="capitalize pt-4"
            >
              confirm
            </Button>
            <ConfirmModal
              open={openConfirmModal}
              onClose={() => setOpenConfirmModal(false)}
              heading="whyNotReceiveOtp"
              description={
                <div className="flex flex-col gap-2">
                  <Typography text="makeSure" color="light" />
                  <Typography text="emailCorrect" color="light" />
                  <Typography text="inboxNotFull" color="light" />
                </div>
              }
              onConfirm={async () => {
                const email = getValues("email");
                await resendOTP(email);
              }}
            />
          </>
        )}
      </Form>
    </>
  );
}
