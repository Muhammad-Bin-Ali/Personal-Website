import React from "react";
import NavBar from "./NavBar";
import StickLink from "./StickLink";
import StickyEmail from "./StickyEmail";

const Layout = ({ children, experienceRef }) => {
  return (
    <div className="w-full relative">
      <NavBar />
      <StickLink />
      <StickyEmail />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
