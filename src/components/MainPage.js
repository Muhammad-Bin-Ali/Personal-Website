import React, { useRef, useEffect, useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const imageClassLeft =
  "block mx-auto h-[35vh] md:h-[80vh] w-full object-cover mb-2 md:mb-4 ";
const imageClassRight =
  "block mx-auto h-[33vh] md:h-[75vh] w-full object-cover mb-2 md:mb-4 ";

const animatedUnderline =
  "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

const font = "font-Poppins ";

const MainPage = ({ setCanScroll }) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const [clicked, setClicked] = useState(false);

  const photos = useStaticQuery(graphql`
    query {
      allFile(
        sort: { base: ASC }
        filter: {
          extension: { regex: "/(jpg)|(jpeq)|(png)/" }
          sourceInstanceName: { eq: "mainPageImages" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const mobileLearnMoreText = "Learn More";
  const learnMoreTextArray = [...mobileLearnMoreText];

  useEffect(() => {
    const target = ref.current;
    if (!isMobile) {
      document.addEventListener("wheel", function (e) {
        // e.preventDefault();
        // scroll the div
        target.scrollBy(0, e.deltaY);
      });
    }

    return document.removeEventListener("wheel", () => {});
  }, [isMobile]);

  const delayTillContent = 2500;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={clicked ? "exit" : "show"}
      exit="exit"
      className="z-[13]"
      key="mainPageContainerDiv"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 fixed top-0 bottom-0 h-screen w-screen bg-white md:bg-white z-20 overflow-auto`}
      >
        <motion.div
          key="leftSideDiv"
          variants={leftSide}
          className="flex flex-col pb-48 md:py-0 max-h-screen justify-center px-5 md:px-20 relative z-20"
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
                <span>Engineer with a </span>
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
                A programmer with a soft-spot for photography and music
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={aboutMeText}
            className="absolute bottom-20 cursor-pointer hidden md:block overflow-hidden"
            onClick={() => {
              setClicked(!clicked);
              setTimeout(() => setCanScroll(true), delayTillContent);
            }}
          >
            <svg
              className="inline"
              width="8"
              height="33"
              viewBox="0 )0 8 33"
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
              rotate: [0, 180, 180, 270, 360],
              borderRadius: ["100%", "0%", "50%", "25%", "100%"],
            }}
            transition={{
              delay: 1.5,
              duration: 2,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            onClick={() => {
              setClicked(!clicked);
              setTimeout(() => setCanScroll(true), delayTillContent);
            }}
            className="z-[14] absolute w-14 h-14 mx-auto left-0 right-0  bg-myYellow active:bg-myYellow-dark duration-150 -bottom-5 shadow-mainPageButton md:hidden rounded-full"
          >
            <svg
              viewBox="0 0 200 200"
              className="mainPageCircle scale-0 overflow-visible animate-scaleIn"
            >
              <path
                id="MyPath"
                fill="none"
                d="
                M 100, 100
                m -100, 0
                a 100, 100 0 1, 1 200, 0
                a 100, 100 0 1, 1 -200, 0
                "
              />

              <text dy="-25" className="font-Poppins text-4xl font-semibold">
                <textPath startOffset="25%" text-anchor="middle" href="#MyPath">
                  Learn More
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          variants={rightSide}
          ref={ref}
          className="bg-myBrown px-0 md:pl-4 max-h-screen grid grid-cols-2 gap-x-2 md:gap-x-4 md:overflow-hidden z-[12]"
        >
          <div className="h-full">
            <RenderedImageDiv
              imageNodes={photos.allFile.edges.filter((node, index) => {
                return index % 2 == 0;
              })}
              imageClass={imageClassLeft}
              variants={downImageDiv}
            />
          </div>
          <div className="">
            <RenderedImageDiv
              imageNodes={photos.allFile.edges.filter((node, index) => {
                return index % 2 == 1;
              })}
              imageClass={imageClassRight}
              variants={upImageDiv}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const RenderedImageDiv = ({ variants, imageNodes, imageClass }) => {
  return (
    <motion.div variants={variants} className="h-full">
      {imageNodes.map((imageNode) => {
        const image = getImage(imageNode.node.childImageSharp);
        console.log(image);
        return (
          <GatsbyImage
            className={imageClass}
            image={image}
            alt={imageNode.id}
          />
        );
      })}
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
      duration: 0.6,
    },
  },
};

const rightSide = {
  exit: {
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.8,
      duration: 0.8,
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
      delay: 2.5,
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
