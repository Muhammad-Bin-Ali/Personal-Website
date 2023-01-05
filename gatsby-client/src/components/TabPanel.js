import React from "react";

const TabPanel = ({ place, visible }) => {
  const isVisible = (visible) => (visible ? "block" : "hidden");

  return (
    <div className="mt-5">
      <h1 className={"" + isVisible(visible)}>{place}</h1>
    </div>
  );
};

export default TabPanel;
