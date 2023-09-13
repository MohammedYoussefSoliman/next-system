import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function withOAuthGoogleProvider<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  function GoogleOAuthWrapper(props: T) {
    return (
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENTID as string}
      >
        <WrappedComponent {...props} />
      </GoogleOAuthProvider>
    );
  }

  return GoogleOAuthWrapper;
}
