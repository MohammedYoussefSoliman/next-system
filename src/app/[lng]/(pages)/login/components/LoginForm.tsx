import React from "react";
import Heading from "./Heading";
import EmailForm from "./EmailForm";
import PhoneNumberForm from "./PhoneNumberForm";
import Tabs, { TabPanel } from "@components/Tabs";
import OAuth from "@/components/OAuth";
import Or from "@/components/Or";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Heading />
      <Tabs defaultValue="email" headerClasses={["w-5/6", "self-center"]}>
        <TabPanel value="email" label="byEmail" icon="email">
          <EmailForm />
        </TabPanel>
        <TabPanel value="phone" label="byPhone" icon="phone">
          <PhoneNumberForm />
        </TabPanel>
      </Tabs>
      <Or />
      <OAuth provider="google" mode="login" />
      <OAuth provider="apple" mode="login" />
    </div>
  );
}
