"use client";
import React from "react";
import Link from "@components/Link";
import Icon from "@components/Icon";
import { TextField } from "@components/Inputs";
import Typography from "@components/Typography";
import Button from "@components/Button";
import Form from "@components/Form";
import { useAppUtils } from "@/hooks";
import type { PageProps } from "@/common.types";
import { useTranslation } from "@i18n/client";

export default function Page({ params: { lng } }: Omit<PageProps, "children">) {
  const { t } = useTranslation(lng);
  const { updateLanguage } = useAppUtils();

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Icon name="search" size={60} />
      <Typography text="this is a typography" />
      <Typography as="h1" text="title" />
      <Typography as="h4" color="warn" text="this is a h4" />
      <Form
        onSubmit={(data) => {
          console.log(data);
        }}
        validateOn="onChange"
      >
        {({ control }) => (
          <div className="flex flex-col gap-3">
            <TextField
              name="name"
              label="userName"
              control={control}
              required
              validationRules={{ required: "requiredField" }}
            />
            <Button label="submit" />
          </div>
        )}
      </Form>
      <div className="flex gap-4">
        <Button
          onClick={() => {
            updateLanguage("tr");
          }}
          label="turky"
          // loading="pleaseWait"
        />
        <Button
          onClick={() => {
            updateLanguage("ar");
          }}
          variant="secondary"
          label="arabic"
        />
        <Button
          onClick={() => {
            updateLanguage("fr");
          }}
          variant="transparent"
          label="french"
        />
        <button
          onClick={() => {
            updateLanguage("fr");
          }}
        >
          french
        </button>
        <button
          onClick={() => {
            updateLanguage("en");
          }}
        >
          english
        </button>
      </div>
      <Link
        to="/toRegister"
        label="toRegister"
        namespace="register"
        capitalizeFirstLetter
      />
    </main>
  );
}
