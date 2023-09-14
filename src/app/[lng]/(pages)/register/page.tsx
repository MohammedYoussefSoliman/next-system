import Link from "next/link";
import { ssrTranslation } from "@/i18n/server";
import Container from "@components/Container";
import Typography from "@components/Typography";
import type { PageProps } from "@/common.types";
import Paper from "@components/Paper";

import Banner from "./components/Banner";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";

export default async function Page({
  params: { lng },
}: Omit<PageProps, "children">) {
  const { t } = await ssrTranslation(lng, "register");

  return (
    <main className="flex flex-col items-center flex-1 w-full my-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
          <Paper className="flex flex-col items-center  gap-2 w-full md:w-2/5">
            <Header />
            <RegisterForm />
          </Paper>
          <div className="w-full md:w-1/2">
            <Banner />
          </div>
        </div>
      </Container>
    </main>
  );
}
