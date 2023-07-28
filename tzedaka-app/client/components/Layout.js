import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    // <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
    <div className="bg-gradient-to-r from-black-200 via-gray-200 to-white-200">
      <Navbar />
      {children}

      {/* <main>{children}</main> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
