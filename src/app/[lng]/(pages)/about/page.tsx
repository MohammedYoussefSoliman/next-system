import Link from "next/link";
import { ssrTranslation } from "@/i18n/server";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import type { PageProps } from "@/common.types";

export default async function Page({
  params: { lng },
}: Omit<PageProps, "children">) {
  const { t } = await ssrTranslation(lng, "register");

  return (
    <main className="flex flex-col items-center justify-between flex-1 w-full mb-8">
      <Typography namespace="register" text="this is about us" />
      <Typography namespace="about" as="h1" text="title" />
      <Typography namespace="register" as="h4" color="warn" text="comingSoon" />
      <Typography
        namespace="register"
        as="small"
        color="warn"
        text="this is small from register"
      />
      <Link href={`/${lng}`}>{t("toHome")}</Link>
    </main>
  );
}
