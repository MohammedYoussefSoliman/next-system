import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import _ from "lodash";
import TextFieldBase from "./TextFieldBase";
import withHookFormController from "./withHookFormController";
import {
  TextFieldPropsType,
  ControllerType,
} from "@components/Inputs/Inputs.types";
import { IconButton } from "@/components/Button";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  TextFieldPropsType;

export default function TextFields<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const { getValues } = useFormContext();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
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
      type={showPassword ? "text" : "password"}
      validationRules={{
        ...resolvedRequired,
        validate: (value: string) => {
          if (["confirmPassword", "confirm_password"].includes(props.name)) {
            return value === getValues("password") || "notMatchedPassword";
          }
          return true;
        },
        ...validationRules,
      }}
      InputProps={{
        endAdornment: (
          <IconButton
            size="small"
            type="button"
            variant="transparent"
            iconColor="inherit"
            className="enabled:hover:bg-slate-100"
            icon={showPassword ? "invisible" : "visible"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        ),
      }}
      {...props}
    />
  );
}
