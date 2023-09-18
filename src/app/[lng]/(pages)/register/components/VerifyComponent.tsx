"use client";
import React from "react";
import loGet from "lodash/get";
import { useRouter } from "next/navigation";
import CountDown from "@/components/CountDown";
import { Button } from "@/components/Button";
import { ConfirmModal } from "@/components/Modal";
import { OTPInput } from "@/components/Inputs";
import { formDataHandler, getErrorMessage } from "@/utils";
import {
  useAuth,
  useAppDispatch,
  useAxiosInstance,
  useNavigation,
} from "@/hooks";
import verifyOtpService from "@appState/slices/auth/verifyOtpService";
import { showError, showSuccess } from "@appState/slices/ui-actions";
import Typography from "@components/Typography";

type VerifyComponentProps = {
  mode: "email" | "phone";
};

export default function VerifyComponent({ mode }: VerifyComponentProps) {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRouter();
  const { user } = useAuth();
  const { post } = useAxiosInstance();
  const [otp, setOtp] = React.useState<string | null>(null);
  const [resend, setResend] = React.useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] =
    React.useState<boolean>(false);
  const [sendingOtp, setSendingOtp] = React.useState<boolean>(false);
  const [resendingOtp, setResendingOtp] = React.useState<boolean>(false);

  const phoneNumberSendOTP = React.useCallback(async () => {
    const formData = {
      phone: loGet(user, "phone", ""),
      country_code: loGet(user, "country_code", ""),
      type: mode,
      cause: `verify_${mode}`,
      code: otp ? +otp : "",
    };
    setSendingOtp(true);

    try {
      await post("verify-otp-code", formDataHandler(formData));
      dispatch(showSuccess("phoneNumberVerified"));
      navigate("/verify-email");
    } catch (err) {
      const messages = getErrorMessage(err as any);
      dispatch(showError(messages));
    } finally {
      setSendingOtp(false);
    }
  }, [mode, user, otp, post, dispatch, navigate]);

  const sendOTP = React.useCallback(() => {
    if (mode === "email") {
      const formData = {
        email: loGet(user, "email", ""),
        type: mode,
        cause: "verify_email",
        code: otp ? +otp : "",
      };
      dispatch(
        verifyOtpService({
          formData: formDataHandler(formData),
          setLoading(value) {
            setSendingOtp(value);
          },
          onSuccess() {
            mode === "email" ? route.push("/") : navigate("/verify-email");
          },
        })
      );
    } else {
      phoneNumberSendOTP();
    }
  }, [mode, user, otp, dispatch, route, navigate, phoneNumberSendOTP]);

  const resendOTP = React.useCallback(async () => {
    const formData = {
      email: mode === "email" ? loGet(user, mode, "") : undefined,
      phone: mode === "phone" ? loGet(user, mode, "") : undefined,
      type: mode,
      cause: `verify_${mode}`,
    };
    setResendingOtp(true);

    try {
      await post("send-otp-code", formDataHandler(formData));
      dispatch(showSuccess("otpCodeSent"));
    } catch (err) {
      const messages = getErrorMessage(err as any);
      dispatch(showError(messages));
    } finally {
      setResend(false);
      setResendingOtp(false);
    }
  }, [dispatch, post, user, mode]);
  return (
    <div className="flex flex-col gap-4 mt-2 mb-4 w-full">
      <OTPInput codeLength={6} onFinish={(otp) => setOtp(otp)} />
      <div className="mb-4" />
      <Button
        onClick={sendOTP}
        size="large"
        loading={sendingOtp}
        disabled={!Boolean(otp)}
      >
        confirm
      </Button>
      <div className="flex w-full items-center justify-between">
        <Button
          disabled={!resend}
          className="py-2 px-2"
          variant="transparent"
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
        onConfirm={resendOTP}
      />
    </div>
  );
}
