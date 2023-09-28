import React from "react";
import { ssrTranslation } from "@/i18n/server";

import Main from "@/components/Main";
import AddProduct from "./components/AddProduct/AddProduct";
import { LangProps } from "@/common.types";

export async function generateMetadata({
  params,
}: {
  params: {
    lng: LangProps;
  };
}) {
  const { t } = await ssrTranslation(params.lng as LangProps);

  return {
    title: t("addProduct"),
  };
}

export default async function Page() {
  return (
    <Main>
      <AddProduct />
    </Main>
  );
}
