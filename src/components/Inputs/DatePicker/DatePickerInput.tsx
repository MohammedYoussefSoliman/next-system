import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import BaseInput from "./DatePicker";
import withHookFormController from "./withHookFormController";
import { DateInputProps, ControllerType } from "../Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  DateInputProps;

export default function DatePickerInput<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const Input = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(BaseInput),
    []
  );
  const { required } = props;
  const { t } = useTranslation("app");

  const resolvedRequired = React.useMemo(() => {
    let obj = {};
    if (required) {
      obj = {
        validate: (value: any) =>
          !_.isEmpty(value) ||
          t(typeof required === "string" ? required : "requiredField"),
      };
    }
    return obj;
  }, [required, t]);

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
