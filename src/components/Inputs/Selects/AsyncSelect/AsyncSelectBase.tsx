import React from "react";
import Async from "react-select/async";
import { debounce } from "lodash";
import InputError from "@components/Inputs/Error";
import Label from "@components/Inputs/Label";
import { AsyncSelectProps } from "@components/Inputs/Inputs.types";

export default React.memo(function AsyncSelect({
  name,
  label,
  error,
  onChange,
  value,
  required,
  placeholder,
  loadOptions,
  isDisabled,
  isClearable,
  isLoading,
  defaultValue,
  defaultInputValue,
}: AsyncSelectProps) {
  const debouncedLoadOptions = debounce(loadOptions, 400);

  return (
    <div className="flex flex-col w-full sm:gap-1.5 md:gap-2">
      {label && <Label label={label} required={required} />}
      <Async
        name={name}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isClearable={isClearable}
        isLoading={isLoading}
        defaultOptions
        cacheOptions
        loadOptions={debouncedLoadOptions}
        onChange={onChange}
        value={value}
        defaultInputValue={defaultInputValue}
        defaultValue={defaultValue}
      />
      {error && <InputError error={error} />}
    </div>
  );
});
