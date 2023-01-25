import React from "react";

const NotableProject = ({ project, rightSide }) => {
  return (
    <div
      className={
        "flex" +
        (rightSide ? " flex-row-reverse " : " flex-row ") +
        "items-center mb-16"
      }
    >
      <div className={rightSide ? "ml-16" : "mr-16"}>
        <h2 className="font-Poppins font-semibold text-black text-2xl mb-6">
          {project.name}
        </h2>
        <div className="border-2 border-black rounded-lg p-6 shrink max-w-lg font-Poppins text-base">
          {project.description}
        </div>
        <div className={"mt-3" + (rightSide ? " text-right " : " text-left ")}>
          {project.technologies.map((technology) => (
            <h3
              className={
                "font-Poppins font-semibold text-myGray text-sm inline" +
                (rightSide ? " ml-3 " : " mr-3 ")
              }
            >
              {technology}
            </h3>
          ))}
        </div>
        <a href={project.link} target="_blank" className="">
          <svg
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              "mt-3 h-6 w-auto" + (rightSide ? " float-right " : " float-left ")
            }
            href={project.link}
          >
            <path
              d="M6.82812 16.9219C6.82812 16.9219 6.23437 14.5469 7.42187 13.3594C7.42187 13.3594 5.04687 13.3594 3.26562 11.5781C1.48438 9.79688 2.07812 6.23438 3.26562 5.04688C2.67187 3.26562 3.85937 2.07812 3.85937 2.07812C3.85937 2.07812 5.64062 2.07812 6.82812 3.26562C8.01562 2.67188 10.9844 2.67188 12.1719 3.26562C13.3594 2.07812 15.1406 2.07812 15.1406 2.07812C15.1406 2.07812 16.3281 3.26562 15.7344 5.04688C16.9219 6.23438 17.5156 9.79688 15.7344 11.5781C13.9531 13.3594 11.5781 13.3594 11.5781 13.3594C12.7656 14.5469 12.1719 16.9219 12.1719 16.9219M6.23437 16.3281C4.45312 16.9219 2.67187 15.7344 2.07812 15.1406"
              stroke="black"
              stroke-width="1.31944"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <img
        src={project.images}
        className="object-cover h-[22rem] w-[50rem] rounded-md"
      ></img>
    </div>
  );
};

export default NotableProject;
