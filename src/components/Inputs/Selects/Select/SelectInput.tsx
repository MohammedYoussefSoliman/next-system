import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import SelectBase from "./SelectBase";
import withHookFormController from "./withHookFormController";
import { ControllerType, SelectProps } from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  SelectProps;

export default function AsyncSelectInput<T extends FieldValues>(
  props: WithControllerProps<T>
) {
  const Select = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(SelectBase),
    []
  );

  const { required } = props;

  return (
    <Select
      validationRules={
        required
          ? {
              validate: (value) =>
                !_.isEmpty(value) || typeof required === "string"
                  ? required
                  : "this field is required",
            }
          : undefined
      }
      {...props}
    />
  );
}
