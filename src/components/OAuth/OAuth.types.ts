export type OAuthProps = {
  provider: "google" | "apple";
  mode: "register" | "login";
};
export type ProviderProps = {
  mode: OAuthProps["mode"];
};
