import React, { useContext, useState } from "react";
import { Link } from "gatsby-link";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useIsMobile from "../customHooks/useIsMobile";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import resume from "../../static/Muhammad Ali CV.pdf";

const NavBar = ({}) => {
  const isMobile = useIsMobile();
  const [sideBar, setSideBar] = useState(false);

  const animatedUnderline =
    "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

  const mobileClass = "text-left text-2xl md:text-base xl:text-base ";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={sideBar ? "show" : "hidden"}
      className=""
    >
      <div className="z-[11] block w-full md:flex justify-between px-5 md:px-20 py-1 md:py-5 font-Poppins font-semibold fixed top-0 mb-10">
        <Link
          to="/"
          className=" hidden md:flex font-Poppins font-semibold text-myPink cursor-pointer my-auto"
        >
          :)
        </Link>

        <div className="mt-5 z-50 relative w-full flex flex-row items-center justify-between drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)] md:hidden">
          <Hamburger
            rounded
            toggled={sideBar}
            onToggle={() => {
              setSideBar(!sideBar);
            }}
            type="turn"
            size={20}
          />

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

        <div className="hidden md:flex flex-col md:flex-row items-start justify-between md:items-center px-5 md:px-0 md:space-x-12">
          <Link to="/" className={isMobile ? "" : animatedUnderline}>
            <span className={mobileClass}>about</span>
          </Link>

          <AnchorLink
            to="/#experience"
            className={isMobile ? "" : animatedUnderline}
          >
            <span className={mobileClass}>experience</span>
          </AnchorLink>

          <Link to="/photos" className={isMobile ? "" : animatedUnderline}>
            <span className={mobileClass}>photos</span>
          </Link>

          {/* <Link to="/contact" className={isMobile ? "" : animatedUnderline}>
            <span className={mobileClass}>contact</span>
          </Link> */}

          <button className="flex border-2 border-black px-6 py-1.5 rounded hover:bg-myYellow transition delay-50 ease-in-out ">
            <a href={resume} download>
              resume
            </a>
          </button>
        </div>

        <motion.div
          variants={variants}
          className="space-y-2 md:hidden bg-white bg-opacity-90 absolute top-0 left-0 h-screen w-screen md:h-auto py-60 px-5 md:py-0 md:px-0 md:bg-transparent md:mt-0 z-20"
        >
          <div className="relative flex-col md:flex-row items-start justify-between md:items-center px-5 md:px-0 md:space-x-12 flex ">
            <Link to="/" className={isMobile ? "" : animatedUnderline}>
              <span onClick={() => setSideBar(false)} className={mobileClass}>
                about
              </span>
            </Link>

            <AnchorLink
              to="/#experience"
              className={isMobile ? "" : animatedUnderline}
            >
              <span onClick={() => setSideBar(false)} className={mobileClass}>
                experience
              </span>
            </AnchorLink>

            <Link to="/photos" className={isMobile ? "" : animatedUnderline}>
              <span onClick={() => setSideBar(false)} className={mobileClass}>
                photos
              </span>
            </Link>

            {/* <Link to="/contact" className={isMobile ? "" : animatedUnderline}>
              <span className={mobileClass}>contact</span>
            </Link> */}

            <button className="absolute md:inline -bottom-20 border-2 border-black px-6 py-1.5 rounded hover:bg-myYellow transition delay-50 ease-in-out ">
              <a href={resume} download>
                resume
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const container = {
  show: {
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const variants = {
  hidden: {
    x: -1000,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  show: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export default NavBar;
