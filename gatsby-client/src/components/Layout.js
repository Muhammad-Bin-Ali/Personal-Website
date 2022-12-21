import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
