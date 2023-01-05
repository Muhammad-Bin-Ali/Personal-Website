import React, { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const WhereWorked = () => {
  const placesWorked = ["Place 1", "Place 2", "Place 3"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index) => (activeIndex === index ? true : false);

  return (
    <section className="">
      <div>
        <h1 className="flex items-center after:w-96 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray  ">
          Where I've Worked
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          {placesWorked.map((place, index) => (
            <Tab
              key={index}
              index={index}
              title={place}
              onClick={handleClick}
            />
          ))}
        </div>
        <div className="">
          {placesWorked.map((place, index) => (
            <TabPanel key={index} place={place} visible={checkActive(index)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWorked;
