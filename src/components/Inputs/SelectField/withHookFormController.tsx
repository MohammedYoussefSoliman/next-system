import React from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import {
  ControllerType,
  SelectFieldPropsType,
} from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  SelectFieldPropsType;

export default function withHookFormController<
  FormType extends FieldValues,
  Props extends WithControllerProps<FormType>
>(Component: React.ComponentType<Omit<Props, keyof ControllerType<FormType>>>) {
  return function ControlledComponent({
    control,
    validationRules,
    ...rest
  }: Props) {
    const { name, changeHandler } = rest;
    return (
      <Controller
        name={name as Path<FormType>}
        control={control}
        rules={{ ...validationRules }}
        render={({
          field: { ref, onChange, ...fields },
          fieldState: { error },
        }) => (
          <Component
            {...fields}
            onChange={(e) => {
              onChange(e.target.value);
              if (changeHandler) changeHandler(e.target.value);
            }}
            error={error?.message}
            {...rest}
          />
        )}
      />
    );
  };
}
