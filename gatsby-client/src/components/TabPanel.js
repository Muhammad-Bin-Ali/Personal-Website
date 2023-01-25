import React from "react";

const TabPanel = ({ place, visible, descriptions, duration }) => {
  const isVisible = (visible) =>
    visible ? " block animate-fadeIn" : " hidden";

  return (
    <div
      className={
        "px-8 py-2 duration-300 ease-in-out animate-fadeIn " +
        isVisible(visible)
      }
    >
      <h1 className="font-Poppins font-semibold text-2xl ">{place}</h1>
      <h2 className="className text-base font-Poppins text-myPink font-medium mt-1 mb-4">
        {duration}
      </h2>
      <ul className="">
        {descriptions.map((description) => (
          <li className="leading-normal mb-5 relative list-none before:content-['{'] before:text-2xl before:absolute before:left-0 pl-7 before:font-semibold  before:text-myPink font-Poppins text-myGray text-base">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabPanel;
