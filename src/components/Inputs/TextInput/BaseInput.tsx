import React from "react";
import InputError from "@/components/Inputs/Error";
import Label from "@/components/Inputs/Label";
import Typography from "@/components/Typography";
import { InputPropsType } from "@components/Inputs/Inputs.types";

const BaseInput = React.forwardRef(
  (
    {
      name,
      label,
      className,
      required,
      error,
      suffixComponent,
      prefixComponent,
      helper,
      ...inputProps
    }: InputPropsType,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <Label label={label} required={required} />}
        <div className="w-full flex justify-between gap-1 h-[50px] border border-gray-500 focus-within:border-orange-600 rounded-xl items-center p-1">
          {prefixComponent && prefixComponent}
          <input
            ref={ref}
            className="flex-1 h-full px-3 py-1 bg-transparent placeholder-opacity-100 focus:placeholder-opacity-50 placeholder-gray-600 outline-none"
            type="text"
            {...inputProps}
          />
          {suffixComponent && suffixComponent}
        </div>
        {typeof helper === "string" ? (
          <Typography as="small" color="light" text={helper} />
        ) : (
          helper
        )}
        {error && <InputError error={error} />}
      </div>
    );
  }
);

export default BaseInput;

BaseInput.displayName = "BaseInput";
