import React from "react";
import Container from "@/components/Container";
import { SimplePageProps } from "../Templates.types";
import SimplePageHeader from "./SimplePageHeader";

export default function SimplePage({
  title,
  subTitle,
  children,
}: SimplePageProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      <SimplePageHeader title={title} />
      <Container spacing={6}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-3/4 flex flex-col justify-center items-center gap-4">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
