import React from "react";
import useIsMobile from "../customHooks/useIsMobile";

const StickyEmail = () => {
  const email = "muhammadbinali706@gmail.com";

  return (
    <div
      className={
        "hidden md:flex flex-col fixed right-16 md:right-12 sm:right-8 bottom-0 justify-between h-[26.5em] items-center "
      }
    >
      <a
        href=""
        className="rotate-90 font-Poppins font-medium w-0 tracking-wider text-sm hover:text-myPink duration-300 hover:-translate-y-1"
      >
        {email}
      </a>

      <span className="bg-black h-32 w-0.5 rounded"></span>
    </div>
  );
};

export default StickyEmail;
