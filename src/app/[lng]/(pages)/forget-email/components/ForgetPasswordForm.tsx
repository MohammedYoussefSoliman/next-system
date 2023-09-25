import React from "react";
import Heading from "./Heading";
import PhoneNumberForm from "./PhoneNumberForm";

export default function ForgetPasswordForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Heading />
      <PhoneNumberForm />
    </div>
  );
}
