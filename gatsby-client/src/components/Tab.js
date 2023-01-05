import React from "react";

const Tab = ({ index, title, onClick }) => {
  return (
    <button onClick={() => onClick(index)} className="mt-5">
      {title}
    </button>
  );
};

export default Tab;
