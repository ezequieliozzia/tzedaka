// _app.js
import React from "react";
import "../styles/globals.css";
import SignInPage from "@/pages/signInPage";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

import Layout from "@/components/Layout";
const MyApp = ({ Component, pageProps }) => {
  return (
    <ClerkProvider localization={esES}>
      <SignedIn>
        <Layout isLogged>
          <Component {...pageProps} />
        </Layout>
      </SignedIn>
      <SignedOut>
        <Layout isLogged={false}>
          <SignInPage />
        </Layout>
      </SignedOut>
    </ClerkProvider>
  );
};
export default MyApp;
