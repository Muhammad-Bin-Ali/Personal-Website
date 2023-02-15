import React from "react";
import NavBar from "./NavBar";
import StickLink from "./StickLink";
import StickyEmail from "./StickyEmail";
import useIsMobile from "../customHooks/useIsMobile";

const Layout = ({ children }) => {
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
