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
    <div className="flex flex-col gap-1 w-full">
      {label && <Label label={label} required={required} />}
      <div className="w-full h-[50px] border border-gray-500 focus-within:border-orange-600 rounded-xl">
        <input
          className="w-full h-full px-4 py-2 bg-transparent placeholder-opacity-100 focus:placeholder-opacity-50 placeholder-gray-600 outline-none"
          type="text"
          {...inputProps}
        />
      </div>
      {error && <InputError error={error} />}
    </div>
  );
}
