import React from "react";
import { AsyncProps } from "react-select/async";
import { MaskedInputProps as MaskProps } from "react-text-mask";
import { TextFieldProps, SelectProps as MuiSelectProps } from "@mui/material";
import { Props, GroupBase } from "react-select";
import {
  ValidationRule,
  FieldValue,
  FieldValues,
  ValidateResult,
  Control,
} from "react-hook-form";

export type LabelProps = {
  label: string;
  required?: true | string;
};
export type ErrorProps = {
  error: string;
};

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};

export type AsyncOptionType = {
  label: React.ReactNode;
  stringLabel: string;
  value: string;
};

export interface SelectProps
  extends Omit<
    Props<OptionType, boolean, GroupBase<OptionType>>,
    "components" | "isMulti" | "required"
  > {
  name: string;
  options: OptionType[];
  label?: string;
  error?: string;
  rounded?: boolean;
  dense?: boolean;
  isMulti?: true;
  required?: true | string;
  changeHandler?: (value: any) => void;
}
export interface AsyncSelectProps
  extends Omit<
    AsyncProps<OptionType, boolean, GroupBase<OptionType>>,
    "required"
  > {
  name: string;
  loadOptions: (
    inputValue: string,
    callback: (options: AsyncOptionType[]) => void
  ) => Promise<AsyncOptionType[]>;
  label?: string;
  error?: string;
  required?: true | string;
  changeHandler?: (value: any) => void;
}

export type FormValidationRules = {
  required: string | ValidationRule<boolean>;
  pattern: ValidationRule<RegExp>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: (
    value: FieldValue<FieldValues>
  ) => ValidateResult | Promise<ValidateResult>;
};

export type ControllerType<T extends FieldValues> = {
  control: Control<T, any>;
  validationRules?: Partial<FormValidationRules>;
};

export interface InputPropsType
  extends Omit<React.InputHTMLAttributes<any>, "required"> {
  name: string;
  label?: string;
  error?: string;
  className?: string;
  required?: true | string;
  namespace?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  helper?: React.ReactNode;
}

export type TextFieldPropsType = {
  name: string;
  label?: string;
  error?: string;
  className?: string;
  required?: true | string;
  namespace?: string;
  changeHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
} & TextFieldProps;

export type PasswordTextField = TextFieldPropsType & {
  showStrength?: boolean;
};

export type SelectFieldPropsType = {
  options: OptionType[];
  changeHandler?: (value: any) => void;
  renderValueHandler?: (
    value: unknown,
    options: OptionType[]
  ) => React.ReactNode;
  namespace?: string;
  error?: string;
} & MuiSelectProps;

export type PasswordProgress = {
  name: string;
  control: Control<any>;
};

export type DatePickerInputProps = Omit<InputPropsType, "changeHandler"> & {
  changeHandler?: (value: any) => void;
  validationRules?: Partial<FormValidationRules>;
  control: Control<any>;
};
export type DateInputProps = {
  name: string;
  error?: string;
  onChange?: (value: Date | null | undefined) => void;
  value?: Date | null;
  label?: React.ReactNode;
  required?: true | string;
};

export interface MaskedInputProps extends InputPropsType {
  maskProps: MaskProps;
}
