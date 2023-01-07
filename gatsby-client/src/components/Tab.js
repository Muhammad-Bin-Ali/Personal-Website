import React from "react";

const Tab = ({ refObj, index, title, onClick, active }) => {
  const isActive = (active) => (active ? " bg-myPink-light text-myPink " : " ");

  return (
    <button
      ref={(element) => (refObj.current[index] = element)}
      onClick={() => onClick(index)}
      className={
        "pl-5 pr-32 py-3 w-full font-Poppins font-semibold hover:bg-myPink-light ease-in-out duration-300 text-base text-left border-l-4" +
        isActive(active)
      }
    >
      {title}
    </button>
  );
};

export default Tab;
