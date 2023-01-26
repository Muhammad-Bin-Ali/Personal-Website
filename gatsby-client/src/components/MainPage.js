import React, { useRef, useEffect, useState } from "react";

const imageClassLeft = "block mx-auto h-1/3 w-full object-cover mb-8";
const imageClassRight = "block mx-auto h-1/4 w-full object-cover mb-8";

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

  useEffect(() => {
    console.log(true);
    const target = ref.current;
    console.log("HELP");
    document.addEventListener("wheel", function (e) {
      // e.preventDefault();
      // scroll the div
      target.scrollBy(0, e.deltaY);
    });
  }, []);

  return (
    visible && (
      <div
        className={`grid grid-cols-2 fixed top-0 bottom-0 h-screen w-screen bg-white z-50 animate-fadeIn ${visibilityClass}`}
      >
        <div className="flex flex-col max-h-screen justify-center px-20">
          <div className="h-auto w-auto">
            <h1 className={font + "text-6xl font-bold uppercase mb-1"}>
              <span className="text-myPink">Muh</span>
              <span className="text-myYellow">am</span>
              <span className="text-myGreen">mad </span>
              <span>Bin Ali.</span>
            </h1>
            <h2 className={font + "text-4xl font-bold mb-6"}>
              Engineer-to-be with a <span className="text-myPink">cr</span>
              <span className="text-myYellow">eat</span>
              <span className="text-myGreen">ive </span>
              streak.
            </h2>
            <p className={font + " text-md font-regular text-myGray w-4/5"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          <div
            className="absolute bottom-20 cursor-pointer"
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
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 32.3536C3.84171 32.5488 4.15829 32.5488 4.35355 32.3536L7.53553 29.1716C7.73079 28.9763 7.73079 28.6597 7.53553 28.4645C7.34027 28.2692 7.02369 28.2692 6.82843 28.4645L4 31.2929L1.17157 28.4645C0.976309 28.2692 0.659727 28.2692 0.464465 28.4645C0.269203 28.6597 0.269203 28.9763 0.464465 29.1716L3.64645 32.3536ZM3.5 -2.18557e-08L3.5 32L4.5 32L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                fill="black"
              />
            </svg>

            <h3 className="font-Poppins text-black text-md inline ml-3">
              Here’s more about me :)
            </h3>
          </div>
        </div>
        <div
          ref={ref}
          className="bg-myBrown pl-8 max-h-screen grid grid-cols-2 gap-x-8 overflow-hidden"
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
