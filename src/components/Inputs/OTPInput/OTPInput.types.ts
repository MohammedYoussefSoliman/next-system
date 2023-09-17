import { UseFormSetValue, FieldValues } from "react-hook-form";

export type OTPInputPropsType = {
  codeLength: number;
  name?: string;
  hasError?: boolean;
  onFinish?: (code: string) => void;
  setValue?: UseFormSetValue<FieldValues>;
};
