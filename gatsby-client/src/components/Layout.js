import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children, experienceRef }) => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
