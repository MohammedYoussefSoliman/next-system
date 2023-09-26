import React from "react";
import Container from "@/components/Container";
import Typography from "@components/Typography";
import { SimplePageProps } from "../Templates.types";

type SimplePageHeaderProps = Omit<SimplePageProps, "children">;

export default function SimplePageHeader({
  title,
  subTitle,
  upperOrnament,
  lowerOrnament,
}: SimplePageHeaderProps) {
  return (
    <Container>
      <div className="w-full p-px bg-gradient-to-r from-rose-500 to-amber-300 rounded-2xl h-[275px]">
        <div className="w-full h-full flex flex-col justify-center items-center bg-amber-100 p-8 overflow-hidden rounded-[15px] gap-2 relative">
          <Typography
            as="h1"
            text={title}
            className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 font-medium capitalize"
          />
          {typeof subTitle === "string" ? (
            <Typography text={subTitle} />
          ) : (
            subTitle
          )}
          {upperOrnament && (
            <div className="absolute top-2 right-2">{upperOrnament}</div>
          )}
          {lowerOrnament && (
            <div className="absolute top-2 right-2">{lowerOrnament}</div>
          )}
        </div>
      </div>
    </Container>
  );
}
