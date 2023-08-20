import React from "react";
import Select from "react-select";
import Error from "@components/Inputs/Error";
import Label from "@components/Inputs/Label";
import { SelectProps } from "@components/Inputs/Inputs.types";

export default function SelectBase({
  name,
  label,
  options,
  error,
  rounded,
  dense,
  onChange,
  value,
  required,
  placeholder,
  ...selectProps
}: SelectProps) {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    if (!value) {
      ref?.current?.clearValue();
    }
  }, [value]);

  return (
    <div className="flex flex-col w-full sm:gap-1.5 md:gap-2">
      {label && <Label label={label} required={required} />}
      <Select
        ref={ref}
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={value}
        {...selectProps}
      />
      {error && <Error error={error} />}
    </div>
  );
}
