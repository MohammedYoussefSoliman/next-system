"use client";
import React from "react";
import Icon from "@components/Icon";
import Typography from "@components/Typography/Typography";

export default function RegisterHeader() {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center mb-6">
      <div className="mb-6">
        <Icon name="mazaady-logo" size={60} />
      </div>
      <Typography
        as="h3"
        text="forgetPassword"
        className="font-medium capitalize"
      />
      <Typography
        as="p2"
        text="forgetPasswordStatement"
        className="text-center capitalize text-gray-400"
      />
    </div>
  );
}
