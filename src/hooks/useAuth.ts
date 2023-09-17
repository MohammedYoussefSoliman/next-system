import React from "react";
import { formDataHandler } from "@/utils";
import logoutService from "@appState/slices/auth/logoutService";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useNavigation } from ".";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();

  const {
    auth: { token, user, isVerified },
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
          navigate("/");
        },
      })
    );
  }, [dispatch, navigate]);

  return {
    loggedIn: isVerified,
    hasToken: Boolean(token),
    user,
    logout,
  };
}
