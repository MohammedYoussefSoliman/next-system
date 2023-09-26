import React from "react";
import loGet from "lodash/get";
import { ssrTranslation } from "@/i18n/server";

import Main from "@/components/Main";
import Image from "@/components/Image";
import instance from "@/services/instance";
import SimplePage from "@/components/Templates/SimplePage";
import HTML from "@/components/HTML";

import { LangProps } from "@/common.types";

export async function generateMetadata({ params }: { [key: string]: any }) {
  const { t } = await ssrTranslation(params.lng as LangProps);

  return {
    title: t("privacyPolicy"),
  };
}

export const revalidate = 20 * 60 * 60;

export const getData = async () => {
  const { get } = instance;
  const response = await get("blogs/privacy");
  return response;
};

export default async function Page() {
  const response = await getData();

  return (
    <Main>
      <SimplePage
        title="privacyPolicy"
        upperOrnament={
          <Image
            name="privacy-upper-ornament.png"
            alt="privacy upper ornament"
            width={123}
            height={134}
          />
        }
        lowerOrnament={
          <Image
            name="privacy-lower-ornament.png"
            alt="privacy lower ornament"
            width={113}
            height={128}
          />
        }
      >
        <HTML content={loGet(response, "data.data.body", "")} />
      </SimplePage>
    </Main>
  );
}
