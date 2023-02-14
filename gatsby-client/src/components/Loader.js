import React from "react";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";

const container = {
  show: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      className="bg-white z-50 fixed h-screen w-screen flex items-center"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div
        key="image-1"
        className="absolute top-[10%] left-[15%]"
        variants={item}
      >
        <img src={`../../loaderImages/image-1.jpg`} className="w-32 h-auto" />
      </motion.div>

      <motion.div
        key="image-2"
        className="absolute top-[70%] left-[35%]"
        variants={item}
      >
        <img src={`../../loaderImages/image-1.jpg`} className="w-24 h-auto" />
      </motion.div>

      <motion.div
        key="image-3"
        className="absolute top-[40%] left-[85%]"
        variants={item}
      >
        <img src={`../../loaderImages/image-1.jpg`} className="w-40 h-auto" />
      </motion.div>
      {/* <div className="mx-auto my-auto">
        <TypeIt
          className="font-Poppins font-semibold text-5xl "
          getBeforeInit={(instance) => {
            instance.type("<colouredText><colouredText/>");

            instance.options({ lifeLike: true, speed: 100 });
            return instance;
          }}
        />
        <motion.h2
          className={
            "font-Poppins text-5xl md:text-4xl font-bold md:w-2/3  md:font-semibold mb-6 mt-48 md:mt-0 drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] "
          }
        >
          Engineer with a <span className="text-myPink">cr</span>
          <span className="text-myYellow ">eat</span>
          <span className="text-myGreen">ive </span>
          streak.
        </motion.h2>
      </div> */}
    </motion.div>
  );
};

const colouredText = ({ children }) => {
  return (
    <colouredText>
      <span className="text-myPink">Muh</span>
      <span className="text-Yellow">am</span>
      <span className="text-myGreen">mad</span>
    </colouredText>
  );
};

export default Loader;
