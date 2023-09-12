import { NextAuthOptions } from "next-auth";
import googleProvider from "next-auth/providers/google";
import appleProvider from "next-auth/providers/apple";
export const authConfig: NextAuthOptions = {
  providers: [
    googleProvider({
      clientId: "clientId",
      clientSecret: "clientSecret",
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
