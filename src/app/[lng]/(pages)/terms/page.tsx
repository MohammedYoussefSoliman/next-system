import React from "react";
import Main from "@/components/Main";
import SimplePage from "@/components/Templates/SimplePage";

export default async function Page() {
  return (
    <Main>
      <SimplePage title="termsAndCondition">
        <p>terms</p>
      </SimplePage>
    </Main>
  );
}
