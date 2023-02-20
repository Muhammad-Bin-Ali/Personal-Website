import React from "react";
import Carousel from "react-material-ui-carousel";

const NotableProject = ({ project, rightSide }) => {
  return (
    <div
      className={
        "flex" +
        (rightSide ? " md:flex-row-reverse " : " md:flex-row ") +
        "mb-16 md:mb-32 z-10 flex-col-reverse items-center overflow-x-hidden w-full px-5 md:px-0"
      }
    >
      <div className={rightSide ? "lg:ml-16" : "lg:mr-16"}>
        <h2 className="font-Poppins font-semibold text-black text-lg md:text-2xl mb-6">
          {project.name}
        </h2>
        <div className="border-2 border-black rounded-lg p-6 shrink max-w-lg mx-auto font-Poppins text-sm md:text-base">
          {project.description}
        </div>
        <div
          className={
            "flex flex-row md:flex-col items-center justify-start px-2 md:px-0" +
            (rightSide ? " md:items-end " : " md:items-start ")
          }
        >
          <div
            className={
              "mt-3 flex flex-row flex-wrap justify-start mr-3 md:mr-0" +
              (rightSide ? " md:justify-end " : " md:justify-start ")
            }
          >
            {project.technologies.map((technology) => (
              <h3
                className={
                  "font-Poppins font-semibold text-myGray text-sm inline mr-2" +
                  (rightSide ? " md:ml-3 " : " md:mr-3 ")
                }
              >
                {technology}
              </h3>
            ))}
          </div>
          <a href={project.link} target="_blank">
            <svg
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={
                "mt-3 h-6 w-auto stroke-black hover:stroke-myPink duration-100 mx-auto."
              }
              href={project.url}
            >
              <path
                d="M6.82812 16.9219C6.82812 16.9219 6.23437 14.5469 7.42187 13.3594C7.42187 13.3594 5.04687 13.3594 3.26562 11.5781C1.48438 9.79688 2.07812 6.23438 3.26562 5.04688C2.67187 3.26562 3.85937 2.07812 3.85937 2.07812C3.85937 2.07812 5.64062 2.07812 6.82812 3.26562C8.01562 2.67188 10.9844 2.67188 12.1719 3.26562C13.3594 2.07812 15.1406 2.07812 15.1406 2.07812C15.1406 2.07812 16.3281 3.26562 15.7344 5.04688C16.9219 6.23438 17.5156 9.79688 15.7344 11.5781C13.9531 13.3594 11.5781 13.3594 11.5781 13.3594C12.7656 14.5469 12.1719 16.9219 12.1719 16.9219M6.23437 16.3281C4.45312 16.9219 2.67187 15.7344 2.07812 15.1406"
                stroke-width="1.31944"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={false}
        autoPlay={true}
        className="w-full mb-10 md:mb-0"
      >
        {project.images.map((image, i) => (
          <img
            src={image}
            key={i}
            className="object-cover w-full md:h-auto md:max-h-[22rem] md:max-w-[50rem] rounded-md  "
          ></img>
        ))}
      </Carousel>
    </div>
  );
};

export default NotableProject;
