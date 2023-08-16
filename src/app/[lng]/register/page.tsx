import Link from "next/link";
import { ssrTranslation } from "@/i18n/server";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import type { PageProps } from "@/app/[lng]/common.types";

export default async function Page({
  params: { lng },
}: Omit<PageProps, "children">) {
  const { t } = await ssrTranslation(lng, "register");

  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <Icon name="mazaady-logo" size={60} />
      <Typography
        lng={lng}
        translationSource="register"
        text="this is register"
      />
      <Typography lng={lng} translationSource="register" as="h1" text="title" />
      <Typography
        translationSource="register"
        lng={lng}
        as="h4"
        color="warn"
        text="this is a h4"
      />
      <Typography
        translationSource="register"
        lng={lng}
        as="small"
        color="warn"
        text="this is small from register"
      />
      <Link href={`/${lng}`}>{t("toHome")}</Link>
    </main>
  );
}
