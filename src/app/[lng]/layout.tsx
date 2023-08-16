import "../globals.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import type { PageProps } from "./common.types";
import AppProviders from "./AppProviders";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <AppProviders>
        <body className={inter.className}>
          <nav>header</nav>
          {children}
          <footer>footer</footer>
        </body>
      </AppProviders>
    </html>
  );
}
