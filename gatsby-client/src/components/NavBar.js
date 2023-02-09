import React from "react";
import { Link } from "gatsby-link";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar = () => {
  const animatedUnderline =
    "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";
  return (
    <nav className="w-full flex justify-between px-20 py-5 font-Botanika font-semibold md:text-md sm:text-sm xl:text-base fixed bg-white z-20 drop-shadow top-0 mb-10">
      <Link
        to="/"
        className="font-Poppins font-semibold text-myPink cursor-pointer my-auto"
      >
        :)
      </Link>
      <div className="space-x-12">
        <Link to="/" className={animatedUnderline}>
          about
        </Link>
        {/* <Link to="/experience" className={animatedUnderline}>
          experience
        </Link> */}
        <AnchorLink to="#experience" className={animatedUnderline}>
          experience
        </AnchorLink>
        <Link to="/photos" className={animatedUnderline}>
          photos
        </Link>
        <Link to="/contact" className={animatedUnderline}>
          contact
        </Link>
        <button className="border-2 border-black px-6 py-1.5 rounded hover:bg-myYellow transition delay-50 ease-in-out ">
          resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
