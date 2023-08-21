/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { useAppSelector } from "@/hooks";

import Link from "next/link";
import Image from "@components/Image";

export default function Logo() {
  const { language } = useAppSelector((state) => state.ui);
  return (
    <Link href={`/${language}`}>
      <Image name="mazaady-logo.png" width={108} height={43} />
    </Link>
  );
}
