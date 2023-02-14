import React, { useRef, useEffect, useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";
import { easeOut, motion } from "framer-motion";

const imageClassLeft = "block mx-auto h-1/4 w-full object-cover mb-2 md:mb-8 ";
const imageClassRight = "block mx-auto h-1/5 w-full object-cover mb-2 md:mb-8 ";

const imagesLeft = [
  { id: 1, src: "../../DSC_6140.jpg" },
  { id: 2, src: "../../DSC_6298.jpg" },
  { id: 3, src: "../../DSC_7688.jpg" },
];

const imagesRight = [
  { id: 4, src: "../../DSC_7786.jpg" },
  { id: 5, src: "../../DSC_7761.jpg" },
  { id: 6, src: "../../DSC_7787.jpg" },
  { id: 7, src: "../../DSC_9149.jpg" },
];

const animatedUnderline =
  "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

const font = "font-Poppins ";

const RenderedImageDiv = ({ variants, images, imageClass }) => (
  <motion.div variants={variants} className="h-full">
    {images.map((image) => (
      <img className={imageClass} src={image.src} alt="TEXT" key={image.id} />
    ))}
  </motion.div>
);

const MainPage = ({ setCanScroll }) => {
  const ref = useRef(null);
  const [visibilityClass, setVisibilityClass] = useState("");
  const isMobile = useIsMobile();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(true);
    const target = ref.current;
    console.log("HELP");
    if (!isMobile) {
      document.addEventListener("wheel", function (e) {
        // e.preventDefault();
        // scroll the div
        target.scrollBy(0, e.deltaY);
      });
    }

    return document.removeEventListener("wheel", () => {});
  }, [isMobile]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={clicked ? "exit" : "show"}
      exit="exit"
      className=""
      key="mainPageContainerDiv"
      onAnimationComplete={() => {
        if (clicked) setCanScroll(true);
      }}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 fixed top-0 bottom-0 h-screen w-screen bg-white md:bg-white z-20 overflow-auto`}
      >
        <motion.div
          key="leftSideDiv"
          variants={leftSide}
          className="flex flex-col pb-56 md:py-0 max-h-screen justify-center px-5 md:px-20 relative"
        >
          <div className="h-auto w-auto">
            <div className="mt-5 flex flex-row items-center justify-between drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]">
              <h1 className="h-5 font-Poppins text-myPink text-xs font-semibold md:hidden">
                :)
              </h1>

              <span className="overflow-hidden">
                <motion.h1
                  key="myName"
                  variants={item}
                  className={
                    font +
                    "text-md lowercase md:mt-0 md:relative md:w-full lg:text-6xl font-semibold md:font-bold md:uppercase mb-1 "
                  }
                >
                  <span className="text-myPink">Muh</span>
                  <span className="text-myYellow">am</span>
                  <span className="text-myGreen">mad </span>
                  <span>Bin Ali.</span>
                </motion.h1>
              </span>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                key="aboutMeText"
                variants={item}
                className={
                  font +
                  "text-5xl md:text-4xl font-bold md:w-2/3  md:font-semibold mb-6 mt-48 md:mt-0 drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] "
                }
              >
                <span>Engineer-to-be with a </span>
                <span className="text-myPink">cr</span>
                <span className="text-myYellow ">eat</span>
                <span className="text-myGreen">ive </span>
                <span>streak.</span>
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              {" "}
              <motion.p
                key="aboutMePara"
                variants={item}
                className={
                  font +
                  "text-sm md:text-lg font-regular text-myGray md:w-4/5 ml-28 md:ml-0 mt-20 md:mt-0 "
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </motion.p>
            </div>
          </div>
          <div></div>
          <motion.div
            variants={aboutMeText}
            className="absolute bottom-20 cursor-pointer hidden md:block overflow-hidden"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <svg
              className="inline"
              width="8"
              height="33"
              viewBox="0 0 8 33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 32.3536C3.84171 32.5488 4.15829 32.5488 4.35355 32.3536L7.53553 29.1716C7.73079 28.9763 7.73079 28.6597 7.53553 28.4645C7.34027 28.2692 7.02369 28.2692 6.82843 28.4645L4 31.2929L1.17157 28.4645C0.976309 28.2692 0.659727 28.2692 0.464465 28.4645C0.269203 28.6597 0.269203 28.9763 0.464465 29.1716L3.64645 32.3536ZM3.5 -2.18557e-08L3.5 32L4.5 32L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                fill="black"
              />
            </svg>

            <h3
              className={
                "font-Poppins text-black text-md inline ml-3 " +
                animatedUnderline
              }
            >
              Here’s more about me :)
            </h3>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 360],
              borderRadius: ["0%", "0%", "50%", "70%", "50%"],
            }}
            transition={{
              delay: 1,
              duration: 2,
              ease: "easeInOut",
            }}
            onClick={() => setClicked(!clicked)}
            className="rounded-[100%] w-14 h-14 absolute mx-auto left-0 right-0 bg-myYellow -bottom-5 z-50 drop-shadow-lg py-3 md:hidden"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={rightSide}
          ref={ref}
          className="bg-myBrown px-0 md:pl-8 max-h-screen grid grid-cols-2 gap-x-2 md:gap-x-8 md:overflow-hidden"
        >
          <div className="h-full">
            <RenderedImageDiv
              images={imagesLeft}
              imageClass={imageClassLeft}
              variants={downImageDiv}
            />
          </div>
          <div className="">
            <RenderedImageDiv
              images={imagesRight}
              imageClass={imageClassRight}
              variants={upImageDiv}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainPage;

const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      delay: 2,
    },
  },
};

const leftSide = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
      staggerChildren: 0.8,
    },
  },
  exit: {
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.8,
      duration: 0.8,
    },
  },
};

const rightSide = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
      delayChildren: 2,
    },
  },
  exit: {
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.8,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "200%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-200%",
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const aboutMeText = {
  hidden: { opacity: 0, y: "200%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 3,
    },
  },
  exit: {
    opacity: 0,
    y: "-200%",
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const downImageDiv = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const upImageDiv = {
  hidden: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
