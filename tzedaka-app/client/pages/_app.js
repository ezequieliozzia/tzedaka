// _app.js
import React from "react";
import "../styles/globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

import Layout from "@/components/Layout";
const MyApp = ({ Component, pageProps }) => {
  return(
    <ClerkProvider localization={esES}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  )
};
export default MyApp;
