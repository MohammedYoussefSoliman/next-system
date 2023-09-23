"use client";
import React from "react";
import { redirect } from "next/navigation";
import Container from "@components/Container";
import Paper from "@components/Paper";
import { useAuth } from "@/hooks";
import Banner from "@/components/Banner";
import RedirectAuthStatement from "@/components/RedirectAuthStatement";
import LoginForm from "./components/LoginForm";

export default function Page() {
  const { loggedIn } = useAuth();

  React.useEffect(() => {
    if (loggedIn) {
      redirect("/");
    }
  }, [loggedIn]);

  return (
    <main className="flex flex-col items-center flex-1 w-full mt-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
          <Paper className="flex flex-col items-center self-center gap-2 w-full md:w-2/5">
            <LoginForm />
            <RedirectAuthStatement type="register" />
          </Paper>
          <div className="w-full md:w-1/2">
            <Banner />
          </div>
        </div>
      </Container>
    </main>
  );
}
