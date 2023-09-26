import React from "react";
import loGet from "lodash/get";
import { ssrTranslation } from "@/i18n/server";

import Main from "@/components/Main";
import Image from "@/components/Image";
import instance from "@/services/instance";
import SimplePage from "@/components/Templates/SimplePage";
import HTML from "@/components/HTML";

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
    title: t("termsAndCondition"),
  };
}

export const revalidate = 20 * 60 * 60;

const getData = async () => {
  const { get } = instance;
  const response = await get("blogs/terms");
  return response;
};

export default async function Page() {
  const response = await getData();

  return (
    <Main>
      <SimplePage
        title="termsAndCondition"
        upperOrnament={
          <Image
            name="terms-upper-ornament.png"
            alt="terms upper ornament"
            width={82}
            height={112}
          />
        }
        lowerOrnament={
          <Image
            name="terms-lower-ornament.png"
            alt="terms lower ornament"
            width={60}
            height={60}
          />
        }
      >
        <HTML content={loGet(response, "data.data.body", "")} />
      </SimplePage>
    </Main>
  );
}
