"use client";
import React from "react";
import Icon from "@components/Icon";
import Typography from "@components/Typography/Typography";

export default function RegisterHeader() {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center mb-6">
      <div className="mb-4">
        <Icon name="mazaady-logo" size={60} />
      </div>
      <Typography
        as="h4"
        text="welcomeBack"
        className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 font-medium capitalize"
      />
      <Typography
        as="h3"
        text="login"
        namespace="login"
        className="font-medium capitalize"
      />
    </div>
  );
}
