import "../globals.css";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import type { PageProps } from "./common.types";
import AppProviders from "./AppProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <AppProviders>
      <html lang={lng} dir={dir(lng)}>
        <body className={inter.className}>
          <nav>header</nav>
          {children}
          <footer>footer</footer>
        </body>
      </html>
    </AppProviders>
  );
}
