import Link from "next/link";
import { ssrTranslation } from "@/i18n/server";
import Container from "@components/Container";
import type { PageProps } from "@/common.types";
import Paper from "@components/Paper";
import Banner from "../components/Banner";
import RegisterHeader from "../components/RegisterHeader";
import VerifyComponent from "./VerifyComponent";

export default async function Page({
  params: { lng },
}: Omit<PageProps, "children">) {
  const { t } = await ssrTranslation(lng, "register");

  return (
    <main className="flex flex-col items-center flex-1 w-full mt-16">
      <Container spacing={4}>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-2 items-center">
          <Paper className="flex flex-col items-center  gap-2 md:w-2/5 h-fit">
            <RegisterHeader page="verify-email" />
            <VerifyComponent />
          </Paper>
          <div className="w-full md:w-1/2">
            <Banner />
          </div>
        </div>
      </Container>
    </main>
  );
}
