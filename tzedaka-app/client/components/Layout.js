import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <Navbar />
      {children}

      {/* <main>{children}</main> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
