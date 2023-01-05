import React, { useEffect, useState, useRef } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

// refer to https://www.seancdavis.com/posts/animated-sliding-tabs-with-react-and-tailwind/ for tab underline

const WhereWorked = () => {
  const placesWorked = ["Place 1", "Place 2", "Place 3"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabLeftLineHeight, setTabLeftLineHeight] = useState(0);
  const [tabLeftLineTop, setTabLeftLineTop] = useState(0);

  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index) => (activeIndex === index ? true : false);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeIndex];
      console.log(currentTab?.clientHeight, currentTab?.offsetTop);
      setTabLeftLineHeight(currentTab?.clientHeight ?? 0);
      setTabLeftLineTop(currentTab?.offsetTop ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeIndex]);

  return (
    <section className="">
      <div>
        <h1 className="flex items-center after:w-96 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray  ">
          Where I've Worked
        </h1>
      </div>
      <div className="flex flex-row mt-20 ">
        <div className="relative">
          <div className="flex flex-col">
            {placesWorked.map((place, index) => (
              <Tab
                key={index}
                refObj={tabsRef}
                index={index}
                title={place}
                onClick={handleClick}
                active={checkActive(index)}
              />
            ))}
          </div>
          <span
            className="absolute left w-1 transition-all duration-300 bg-myPink "
            style={{ top: tabLeftLineTop, height: tabLeftLineHeight }}
          ></span>
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
