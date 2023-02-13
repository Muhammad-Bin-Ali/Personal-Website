import React, { useRef, useEffect, useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";

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

const RenderedImageDiv = ({ images, imageClass }) => (
  <div className="h-full">
    {images.map((image) => (
      <img className={imageClass} src={image.src} alt="TEXT" key={image.id} />
    ))}
  </div>
);

const MainPage = ({ setCanScroll }) => {
  const ref = useRef(null);
  const [visibilityClass, setVisibilityClass] = useState("");
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();

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
    visible && (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 fixed top-0 bottom-0 h-screen w-screen bg-white md:bg-white z-50 animate-fadeIn overflow-auto ${visibilityClass}`}
      >
        <div className="flex flex-col pb-56 md:py-0 max-h-screen justify-center px-5 md:px-20 relative">
          <div className="h-auto w-auto">
            <div className="mt-5 flex flex-row items-center justify-between drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]">
              <h1 className="h-5 font-Poppins text-myPink text-xs font-semibold md:hidden">
                :)
              </h1>
              <h1
                className={
                  font +
                  "text-md lowercase md:mt-0 md:relative md:w-full lg:text-6xl font-semibold md:font-bold md:uppercase mb-1 "
                }
              >
                <span className="text-myPink">Muh</span>
                <span className="text-myYellow">am</span>
                <span className="text-myGreen">mad </span>
                <span>Bin Ali.</span>
              </h1>
            </div>

            <h2
              className={
                font +
                "text-5xl md:text-4xl font-bold md:w-2/3  md:font-semibold mb-6 mt-48 md:mt-0 drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] "
              }
            >
              Engineer-to-be with a <span className="text-myPink">cr</span>
              <span className="text-myYellow ">eat</span>
              <span className="text-myGreen">ive </span>
              streak.
            </h2>
            <p
              className={
                font +
                "text-sm md:text-lg font-regular text-myGray md:w-4/5 ml-28 md:ml-0 mt-20 md:mt-0 "
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div
            className="absolute bottom-20 cursor-pointer hidden md:block"
            onClick={() => {
              setCanScroll(true);
              setVisibilityClass("animate-moveUpAnimation ");
              setTimeout(() => {
                // setVisible(false);
              }, 1500);
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
          </div>
          <div className="rounded-[100%] w-14 h-14 absolute mx-auto left-0 right-0 bg-myYellow -bottom-5 z-50 drop-shadow-lg py-3 md:hidden"></div>
        </div>
        <div
          ref={ref}
          className="bg-myBrown px-0 md:pl-8 max-h-screen grid grid-cols-2 gap-x-2 md:gap-x-8 md:overflow-hidden"
        >
          <div className="h-full">
            <RenderedImageDiv images={imagesLeft} imageClass={imageClassLeft} />
          </div>
          <div className="">
            <RenderedImageDiv
              images={imagesRight}
              imageClass={imageClassRight}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default MainPage;

{
  /* <div className="grid grid-cols-2 grid-rows-3 gap-6  justify-items-center max-h-auto overflow-hidden">
          <img className={imageClass} src="../../DSC_6140.jpg" alt="" />
          <img className={imageClass} src="../../DSC_6298.jpg" alt="" />
          <img className={imageClass} src="../../DSC_7688.jpg" alt="" />
          <img className={imageClass} src="../../DSC_7761.jpg" alt="" />
          <img className={imageClass} src="../../DSC_7786.jpg" alt="" />
          <img className={imageClass} src="../../DSC_7787.jpg" alt="" />
        </div> */
}
