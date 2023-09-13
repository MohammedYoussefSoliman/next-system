import { NextAuthOptions } from "next-auth";
import googleProvider from "next-auth/providers/google";
import appleProvider from "next-auth/providers/apple";
export const authConfig: NextAuthOptions = {
  providers: [
    googleProvider({
      clientId:
        "421401494729-mjtg4l97m8bd9ij8iqcn3u0pee7sun6n.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    appleProvider({
      clientId: "clientId",
      clientSecret: "clientSecret",
    }),
  ],
  pages: {
    // signIn: "/ar/register",
  },
};
