import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import TextFieldBase from "./TextFieldBase";
import withHookFormController from "./withHookFormController";
import {
  TextFieldPropsType,
  ControllerType,
} from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  TextFieldPropsType;
const emailRegEx = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,6})?$/;

export default function EmailField<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const Input = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(TextFieldBase),
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
        pattern: {
          value: emailRegEx,
          message: "invalidEmail",
        },
        ...validationRules,
      }}
      {...props}
    />
  );
}
