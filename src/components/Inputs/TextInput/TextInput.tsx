import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import BaseInput from "./BaseInput";
import withHookFormController from "./withHookFormController";
import {
  InputPropsType,
  ControllerType,
} from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  InputPropsType;

export default function TextInput<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const Input = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(BaseInput),
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
      type="text"
      validationRules={{
        ...resolvedRequired,
        ...validationRules,
      }}
      {...props}
    />
  );
}
