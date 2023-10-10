import React from "react";
import Select from "react-select";
import Error from "@components/Inputs/Error";
import Label from "@components/Inputs/Label";
import DropdownIndicator from "./components/DropdownIndicator";
import Placeholder from "./components/Placeholder";
import Option from "./components/Option";
import SingleValue from "./components/SingleValue";
import { SelectProps } from "@components/Inputs/Inputs.types";
import useSelectStyles from "../useSelectSStyle";

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
  const styles = useSelectStyles({ error: Boolean(error) });
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
        styles={styles}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          Placeholder,
          Option,
          SingleValue,
        }}
        value={value}
        {...selectProps}
      />
      {error && <Error error={error} />}
    </div>
  );
}
