// _app.js
import React from "react";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import SignInPage from "@/pages/signInPage";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

const MyApp = ({ Component, pageProps }) => {

  return (
      <ClerkProvider localization={esES}>
            <SignedIn>
                <Layout isLogged>
                    <Component {...pageProps} />
                </Layout>
            </SignedIn>
            <SignedOut>
                <Layout isLogged={false} >
                    <SignInPage />
                </Layout>
            </SignedOut>
      </ClerkProvider>
  );
};
export default MyApp;
