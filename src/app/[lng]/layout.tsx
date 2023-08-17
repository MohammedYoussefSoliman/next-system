import "../globals.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import type { PageProps } from "@/common.types";
import AppProviders from "./AppProviders";
import AppEffects from "./AppEffects";
import Header from "@components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <AppProviders>
      <html lang={lng} dir={dir(lng)}>
        <AppEffects />
        <body className={inter.className}>
          <Header />
          {children}
          <footer>footer</footer>
        </body>
      </html>
    </AppProviders>
  );
}
