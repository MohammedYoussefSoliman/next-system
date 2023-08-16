import Link from "next/link";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import Spinner from "@components/Spinner";
import type { PageProps } from "@/app/[lng]/common.types";
import { ssrTranslation } from "@i18n/server";
import { languages } from "@i18n/settings";

export default async function Page({
  params: { lng },
}: Omit<PageProps, "children">) {
  const { t } = await ssrTranslation(lng);

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Icon name="search" size={60} />
      <Typography text="this is a typography" />
      <Typography as="h1" text={t("title")} />
      <Typography as="h4" color="warn" text="this is a h4" />
      <Spinner />
      <Link href={`/${lng}/register`}>{t("toRegister")}</Link>
      <div className="flex gap-2">
        {languages.map((lng) => (
          <Link key={`/${lng}`} href={`/${lng}`}>
            {t(lng)}
          </Link>
        ))}
      </div>
    </main>
  );
}
