import React from "react";
import InputError from "@components/Inputs/Error";
import Label from "@components/Inputs/Label";
import { InputPropsType } from "@components/Inputs/Inputs.types";

export default function BaseInput({
  name,
  label,
  className,
  required,
  error,
  ...inputProps
}: InputPropsType) {
  return (
    <div
      className={`flex  gap-2 h-10 w-full border-cyan-600 rounded ${className}`}
    >
      {label && <Label label={label} required={required} />}
      <input
        className={`flex-1 outline-none px-4 py-2 border rounded bg-transparent`}
        type="text"
        {...inputProps}
      />
      {error && <InputError error={error} />}
    </div>
  );
}
