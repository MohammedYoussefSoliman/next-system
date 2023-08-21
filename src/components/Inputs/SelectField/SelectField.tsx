import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import MuiSelectBase from "./MuiSelectBase";
import withHookFormController from "./withHookFormController";
import {
  SelectFieldPropsType,
  ControllerType,
} from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  SelectFieldPropsType;

export default function SelectField<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const Input = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(MuiSelectBase),
    []
  );
  const { required } = props;

  const resolvedRequired = React.useMemo(() => {
    let obj = {};
    if (required) {
      obj = {
        validate: (value: any) =>
          !_.isEmpty(value) || typeof required === "string"
            ? required
            : "requiredField",
      };
    }
    return obj;
  }, [required]);

  return (
    <Input
      validationRules={{
        ...resolvedRequired,
        ...validationRules,
      }}
      {...props}
    />
  );
}
