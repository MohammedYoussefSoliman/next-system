import React from "react";
import OTPInput from "react-otp-input";
import { Wrapper, Input } from "./styles";
import { OTPInputPropsType } from "./OTPInput.types";

export default function OTP({
  name,
  codeLength,
  onFinish,
  setValue,
  hasError,
}: OTPInputPropsType) {
  const [otpValue, setOtpValue] = React.useState("");

  const handleCodeChanges = React.useCallback((value: string) => {
    setOtpValue(value);
  }, []);

  React.useEffect(() => {
    if (otpValue.length === codeLength) {
      if (setValue && name) setValue(name, otpValue);
      if (onFinish) onFinish(otpValue);
    }
  }, [name, onFinish, otpValue, setValue, codeLength]);

  return (
    <Wrapper>
      <OTPInput
        value={otpValue}
        inputStyle="otp-input"
        containerStyle="otp-container"
        renderInput={(props) => <Input {...props} hasError={hasError} />}
        numInputs={codeLength}
        inputType="number"
        onChange={handleCodeChanges}
        shouldAutoFocus
      />
    </Wrapper>
  );
}
