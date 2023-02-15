import React from "react";
import { Link } from "gatsby-link";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useIsMobile from "../customHooks/useIsMobile";

const NavBar = () => {
  const isMobile = useIsMobile();
  const animatedUnderline =
    "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

  const mobileClass = "text-left text-2xl md:text-base xl:text-base ";

  return (
    <nav className="block bg-white bg-opacity-90 w-screen h-screen md:h-auto md:w-full md:flex justify-between px-10 md:px-20 py-1 md:py-5 font-Botanika font-semibold  fixed z-20 top-0 mb-10">
      <Link
        to="/"
        className=" hidden md:flex font-Poppins font-semibold text-myPink cursor-pointer my-auto"
      >
        :)
      </Link>

      <div className="mt-5 w-full flex flex-row items-center justify-between drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]  md:hidden">
        <h1 className="h-5 font-Poppins text-myPink text-xs font-semibold md:hidden">
          :)
        </h1>

        <h1
          key="myName"
          className={
            "text-md font-Poppins lowercase md:mt-0 md:relative md:w-full lg:text-6xl font-semibold md:font-bold md:uppercase mb-1 "
          }
        >
          <span className="text-myPink">Muh</span>
          <span className="text-myYellow">am</span>
          <span className="text-myGreen">mad </span>
          <span>Bin Ali.</span>
        </h1>
      </div>

      <div className="space-y-2 relative h-40 md:h-auto md:space-x-12 flex flex-col md:flex-row items-start justify-between md:items-center mt-44 md:mt-0">
        <Link to="/" className={isMobile ? "" : animatedUnderline}>
          <span className={mobileClass}>about</span>
        </Link>

        <AnchorLink
          to="#experience"
          className={isMobile ? "" : animatedUnderline}
        >
          <span className={mobileClass}>experience</span>
        </AnchorLink>

        <Link to="/photos" className={isMobile ? "" : animatedUnderline}>
          <span className={mobileClass}>photo</span>
        </Link>

        <Link to="/contact" className={isMobile ? "" : animatedUnderline}>
          <span className={mobileClass}>contact</span>
        </Link>
        <button className="absolute md:inline -bottom-20 border-2 border-black px-6 py-1.5 rounded hover:bg-myYellow transition delay-50 ease-in-out ">
          resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
