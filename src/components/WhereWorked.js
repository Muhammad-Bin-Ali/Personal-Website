import React, { useEffect, useState, useRef } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import useIsMobile from "../customHooks/useIsMobile";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";

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
          role
          description
          duration
        }
      }
    }
  `);

  const data = fetchedData.WorkPlace.workplaces;
  // ______________________________________________________________________
  const ref = useRef();

  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index) => (activeIndex === index ? true : false);

  return (
    <section className={"max-w-[900px] py-24 mx-auto "} ref={ref}>
      {/* header */}
      <div className="grid grid-cols-3 h-20 px-6 md:px-0  mb-7 md:mb-10 items-center ">
        <h1 className="text-[1.3em] max-[460px]:col-span-2 min-[460px]:col-span-1 font-Poppins md:text-3xl font-semibold">
          Where I've Worked
        </h1>
        <span className="bg-myGray col-span-1 h-0.5 rounded"></span>
      </div>

      {/* code for tabs and work experience */}
      {/* the tabs */}
      <div className="flex flex-col md:flex-row h-72 w-full ">
        <div className="relative">
          <motion.div
            variants={tabContainer}
            initial="hidden"
            animate="show"
            className="flex flex-row md:flex-col overflow-auto"
          >
            {data.map((place, index) => (
              <Tab
                variants={tabMotion}
                key={index}
                refObj={tabsRef}
                index={index}
                title={place.name}
                onClick={handleClick}
                active={checkActive(index)}
              />
            ))}
          </motion.div>

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
              role={place.role}
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

const tabContainer = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const tabMotion = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default WhereWorked;
