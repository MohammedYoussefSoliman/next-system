import React from "react";
import Container from "@/components/Container";
import Paper from "@/components/Paper";
import { SimplePageProps } from "../Templates.types";
import SimplePageHeader from "./SimplePageHeader";

export default function SimplePage({
  title,
  subTitle,
  upperOrnament,
  lowerOrnament,
  children,
}: SimplePageProps) {
  return (
    <div className="px-4 w-full flex flex-col gap-10 mb-4">
      <SimplePageHeader
        title={title}
        subTitle={subTitle}
        upperOrnament={upperOrnament}
        lowerOrnament={lowerOrnament}
      />
      <Container spacing={1}>
        <div className="flex flex-col justify-center items-center">
          <Paper className="w-full md:w-3/4 flex flex-col justify-center items-center gap-4">
            {children}
          </Paper>
        </div>
      </Container>
    </div>
  );
}
