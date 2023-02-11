import React, { useEffect, useState, useRef } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import useIsVisible from "../customHooks/isVisible";
import useIsMobile from "../customHooks/useIsMobile";
import { graphql, useStaticQuery } from "gatsby";

// refer to https://www.seancdavis.com/posts/animated-sliding-tabs-with-react-and-tailwind/ for tab underline
const WhereWorked = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabWidthOrHeight, setTabWidthOrHeight] = useState(0);
  const [tabLeftOrTop, setTabLeftOrTop] = useState(0);
  const tabsRef = useRef([]);
  const isMobile = useIsMobile();

  //used for the moving tab underline
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeIndex];
      console.log(isMobile);
      if (isMobile) {
        setTabWidthOrHeight(currentTab?.clientWidth ?? 0);
        setTabLeftOrTop(currentTab?.offsetLeft ?? 0);
      } else {
        setTabWidthOrHeight(currentTab?.clientHeight ?? 0);
        setTabLeftOrTop(currentTab?.offsetTop ?? 0);
      }
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeIndex, isMobile]);

  // ______________________________________________________________________
  //calling server for data
  const fetchedData = useStaticQuery(graphql`
    query {
      WorkPlace {
        workplaces {
          name
          description
          duration
        }
      }
    }
  `);

  const data = fetchedData.WorkPlace.workplaces;
  // ______________________________________________________________________
  const ref = useRef();
  const visible = useIsVisible(ref);

  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index) => (activeIndex === index ? true : false);

  return (
    <section
      className={
        "max-w-[900px] py-24 mx-auto " + (visible ? "animate-fadeIn" : "")
      }
      ref={ref}
    >
      {/* header */}
      <h1 className="flex items-center after:w-1/4 after:flex-initial font-Botanika text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray mb-20">
        Where I've Worked
      </h1>
      {/* code for tabs and work experience */}
      {/* the tabs */}
      <div className="flex flex-col md:flex-row h-72 w-full ">
        <div className="relative">
          <div className="flex flex-row md:flex-col overflow-auto">
            {data.map((place, index) => (
              <Tab
                key={index}
                refObj={tabsRef}
                index={index}
                title={place.name}
                onClick={handleClick}
                active={checkActive(index)}
              />
            ))}
          </div>

          {/* moving underline */}
          <span
            className="absolute left h-0.5   md:w-1 transition-all duration-300 bg-myPink "
            style={
              isMobile
                ? { left: tabLeftOrTop, width: tabWidthOrHeight }
                : { top: tabLeftOrTop, height: tabWidthOrHeight }
            }
          ></span>
        </div>

        {/* tab panels */}
        <div className="w-full ">
          {data.map((place, index) => (
            <TabPanel
              key={index}
              place={place.name}
              descriptions={place.description}
              visible={checkActive(index)}
              duration={place.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWorked;
