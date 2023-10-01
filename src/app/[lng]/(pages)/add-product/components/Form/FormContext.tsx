"use client";
import React from "react";
import {
  useForm,
  FormProvider,
  Mode,
  DefaultValues,
  Resolver,
} from "react-hook-form";
import type { AddProductForm } from "../../AddProducts.types";

export interface FormProps {
  validateOn?: Mode;
  reValidateOn?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: DefaultValues<any>;
  children: React.ReactNode;
  resolver?: Resolver<AddProductForm, any>;
}

export default function FormContext({
  children,
  validateOn,
  defaultValues,
  reValidateOn,
  resolver,
}: FormProps) {
  const methods = useForm({
    mode: validateOn,
    reValidateMode: reValidateOn,
    defaultValues,
    resolver,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
