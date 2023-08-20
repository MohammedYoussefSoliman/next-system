import "../globals.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Tajawal, Nunito } from "next/font/google";
import type { PageProps } from "@/common.types";
import AppProviders from "./Providers/AppProviders";
import AppEffects from "./AppEffects";
import Header from "@components/Header";

const nunito = Nunito({ subsets: ["latin"] });
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lng === "ar" ? tajawal.className : nunito.className}>
        <AppProviders>
          <AppEffects />
          <Header />
          {children}
          <footer>footer</footer>
        </AppProviders>
      </body>
    </html>
  );
}
