import React from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import _ from "lodash";
import { SingleValue } from "react-select";
import { ControllerType, SelectProps } from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  SelectProps;

export default function withHookFormController<
  FormType extends FieldValues,
  Props extends WithControllerProps<FormType>
>(Component: React.ComponentType<Omit<Props, keyof ControllerType<FormType>>>) {
  return React.memo(function ControlledComponent({
    control,
    validationRules,
    ...rest
  }: Props) {
    const { name } = rest;
    return (
      <Controller
        name={name as Path<FormType>}
        control={control}
        rules={{ ...validationRules }}
        render={({ field: { ref, ...fields }, fieldState: { error } }) => (
          <Component
            {...rest}
            required={Boolean(validationRules?.required)}
            {...fields}
            value={rest.options.find((option) => option.value === fields.value)}
            inputRef={ref}
            error={error?.message}
            onChange={(val) => {
              if (val) {
                if (_.isArray(val)) {
                  fields.onChange(val.map((c) => c.value));
                  if (rest.changeHandler)
                    rest.changeHandler(val.map((c) => c.value));
                } else {
                  const value = val as SingleValue<any>;
                  fields.onChange(value);
                  if (rest.changeHandler) rest.changeHandler(value);
                }
              }
            }}
          />
        )}
      />
    );
  });
}
