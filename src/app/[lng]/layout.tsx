import "../globals.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Tajawal, Nunito } from "next/font/google";
import { classNames } from "@/utils";
import type { PageProps } from "@/common.types";
import AppProviders from "./Providers/AppProviders";
import AppEffects from "./AppEffects";
import Header from "@components/Header";

const nunito = Nunito({ subsets: ["latin"], preload: true, display: "swap" });

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export default function RootLayout({ children, params: { lng } }: PageProps) {
  const classes = classNames(
    [
      "flex",
      "min-h-screen",
      "flex-col",
      "items-center",
      "justify-between",
      "bg-stone-100",
    ],
    [lng === "ar" ? tajawal.className : nunito.className]
  );

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <AppProviders>
          <AppEffects />
          <main className={classes}>
            <Header />
            {children}
            {/* <footer>footer</footer> */}
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
