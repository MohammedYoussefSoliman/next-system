"use client";
import Typography from "@/components/Typography";
import { useAppSelector } from "@/hooks";
import React from "react";

type Props = {
  number: number;
  label: string;
};

export default function Counter({ number, label }: Props) {
  const { language } = useAppSelector((state) => state.ui);
  return (
    <div className="flex flex-col items-center">
      <Typography
        as="h3"
        text={language === "ar" ? `${number}+` : `+${number}`}
        className="text-white"
      />
      <Typography
        as="h6"
        text={label}
        className="text-white"
        capitalizeFirstLetter
      />
    </div>
  );
}
