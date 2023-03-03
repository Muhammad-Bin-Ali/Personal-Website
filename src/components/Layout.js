import React from "react";
import NavBar from "./NavBar";
import StickLink from "./StickLink";
import StickyEmail from "./StickyEmail";
import useIsMobile from "../customHooks/useIsMobile";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full relative animate-navFadeIn">
      <NavBar />
      <StickLink />
      <StickyEmail />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
