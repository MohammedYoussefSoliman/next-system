import React from "react";
import { useRouter } from "next/navigation";
import { formDataHandler } from "@/utils";
import logoutService from "@appState/slices/auth/logoutService";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const route = useRouter();

  const {
    auth: { token, user },
  } = useAppSelector((state) => state);

  const logout = React.useCallback(async () => {
    let formDataObj = {};

    const formData = formDataHandler({
      ...formDataObj,
    });
    dispatch(
      logoutService({
        formData,
        onSuccess() {
          route.push("/");
        },
      })
    );
  }, [dispatch, route]);

  return {
    loggedIn: Boolean(token),
    ...user,
    logout,
  };
}
