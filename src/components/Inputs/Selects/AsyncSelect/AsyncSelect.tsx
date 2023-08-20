import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import AsyncSelect from "./AsyncSelectBase";
import withHookFormController from "./withHookFormController";
import {
  ControllerType,
  AsyncSelectProps,
} from "@components/Inputs/Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  AsyncSelectProps;

export default function AsyncSelectInput<T extends FieldValues>(
  props: WithControllerProps<T>
) {
  const Select = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(AsyncSelect),
    []
  );

  return <Select {...props} />;
}
