import React from "react";
import { Link } from "gatsby-link";

const NavBar = () => {
  const animatedUnderline =
    "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";
  return (
    <nav className="w-full flex justify-between px-20 py-10 font-Poppins font-semibold">
      <Link
        to="/"
        className="font-Poppins font-semibold text-myPink cursor-pointer"
      >
        :)
      </Link>
      <div className="space-x-12">
        <Link to="/" className={animatedUnderline}>
          about
        </Link>
        <Link to="/experience" className={animatedUnderline}>
          experience
        </Link>
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
