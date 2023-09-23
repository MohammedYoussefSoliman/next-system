import React from "react";
import Heading from "./Heading";
import EmailForm from "./EmailForm";

export default function ForgetPasswordForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Heading />
      <EmailForm mode="email" />
    </div>
  );
}
