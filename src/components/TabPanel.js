import React from "react";

const TabPanel = ({ role, visible, descriptions, duration }) => {
  const isVisible = (visible) =>
    visible ? " block animate-fadeIn" : " hidden";

  return (
    <div
      className={
        "px-8 py-2 mt-8 md:mt-0 duration-300 ease-in-out animate-fadeIn " +
        isVisible(visible)
      }
    >
      <h1 className="font-Botanika font-semibold text-2xl ">{role}</h1>
      <h2 className="className text-base font-Botanika text-myPink font-medium mt-1 mb-4">
        {duration}
      </h2>
      <ul className="">
        {descriptions.map((description) => (
          <li className="leading-normal mb-5 relative list-none before:content-['{'] before:text-lg md:before:text-2xl before:absolute before:left-0 before:-top-1 pl-7 before:font-semibold  before:text-myPink font-Botanika text-myGray text-xs sm:text-sm md:text-base">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabPanel;
