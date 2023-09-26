import React from "react";

export type SimplePageProps = {
  title: string;
  subTitle?: React.ReactNode;
  lowerOrnament?: React.ReactNode;
  upperOrnament?: React.ReactNode;
  children: React.ReactNode;
};
