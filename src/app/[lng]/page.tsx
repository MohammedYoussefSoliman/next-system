import React from "react";
import _get from "lodash/get";
import Typography from "@components/Typography";

export default async function Page() {
  return (
    <main className="flex gap-4 flex-col items-center justify-center p-24 flex-1">
      <Typography as="h1" text="title" />
      <Typography as="h4" color="warn" text="this is a home page" />
    </main>
  );
}
