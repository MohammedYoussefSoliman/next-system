import React from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import MaskedInput from "react-text-mask";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import BaseInput from "../TextInput/BaseInput";
import { MaskedInputProps, ControllerType } from "../Inputs.types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  MaskedInputProps;

export default function MaskedTextInput<T extends FieldValues>({
  control,
  validationRules,
  maskProps,
  ...props
}: WithControllerProps<T>) {
  const { name, required } = props;
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
    <Controller
      name={name as Path<T>}
      control={control}
      rules={{
        ...resolvedRequired,
        ...validationRules,
      }}
      render={({
        field: { ref, onChange, ...fields },
        fieldState: { error },
      }) => {
        return (
          <MaskedInput
            value={fields.value}
            onChange={(e) => {
              if (props.changeHandler) props.changeHandler(e);
              onChange(e);
            }}
            {...maskProps}
            render={(maskRef, rest) => (
              <BaseInput
                ref={maskRef as any}
                error={error?.message}
                {...props}
                {...rest}
              />
            )}
          />
        );
      }}
    />
  );
}
