import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <main>{children}</main> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
