"use client";
import React from "react";
import Link from "next/link";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import Button from "@components/Button";
import Spinner from "@components/Spinner";
import { useAppUtils } from "@/hooks";
import type { PageProps } from "../../common.types";
import { useTranslation } from "@i18n/client";

export default function Page({ params: { lng } }: Omit<PageProps, "children">) {
  const { t } = useTranslation(lng);
  const { updateLanguage } = useAppUtils();

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Icon name="search" size={60} />
      <Typography text="this is a typography" />
      <Typography as="h1" text={t("title")} />
      <Typography as="h4" color="warn" text="this is a h4" />
      <Spinner />
      <div className="flex gap-4">
        <Button
          onClick={() => {
            updateLanguage("tr");
          }}
          label="turky"
          loading="pleaseWait"
        />
        <Button
          onClick={() => {
            updateLanguage("ar");
          }}
          variant="secondary"
          label="arabic"
          disabled
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
      <Link href={`/${lng}/register`}>{t("toRegister")}</Link>
    </main>
  );
}
