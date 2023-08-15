import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { AppProps } from "@/app/common.types";
import AppProviders from "./AppProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady description",
};

export default function RootLayout({ children, params }: AppProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <nav>header</nav>
          {children}
          <footer>footer</footer>
        </AppProviders>
      </body>
    </html>
  );
}
