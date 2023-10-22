import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "tailwindcss/colors";
import i18next from "i18next";

const lng = i18next.language;

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: colors.rose[600],
      light: colors.rose[200],
      dark: colors.rose[700],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.amber[600],
      light: colors.amber[100],
      dark: colors.amber[700],
      contrastText: colors.white,
    },
  },
  typography: {
    fontFamily:
      lng === "ar"
        ? "__Tajawal_8d4642, __Tajawal_Fallback_8d4642"
        : "__Nunito_3dc409, __Nunito_Fallback_3dc409",
  },
});
export default function withMuiTheme<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  function ThemeWrapper(props: T) {
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  }

  return ThemeWrapper;
}
