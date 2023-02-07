import React from "react";

const OtherProject = ({ project }) => {
  return (
    <div className="bg-myPink bg-opacity-20 border-2 border-myPink rounded-md w-72 h-auto hover:-translate-y-2 hover:drop-shadow duration-200 ease-in-out mb-10 px-5 py-4 relative">
      <div className="w-full flex justify-between">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8"
        >
          <path
            d="M12.5781 33.7812H16.1719C16.3695 33.7812 16.5312 33.6195 16.5312 33.4219V12.5781C16.5312 12.3805 16.3695 12.2188 16.1719 12.2188H12.5781C12.3805 12.2188 12.2188 12.3805 12.2188 12.5781V33.4219C12.2188 33.6195 12.3805 33.7812 12.5781 33.7812ZM21.2031 21.2031H24.7969C24.9945 21.2031 25.1562 21.0414 25.1562 20.8438V12.5781C25.1562 12.3805 24.9945 12.2188 24.7969 12.2188H21.2031C21.0055 12.2188 20.8438 12.3805 20.8438 12.5781V20.8438C20.8438 21.0414 21.0055 21.2031 21.2031 21.2031ZM29.8281 24.4375H33.4219C33.6195 24.4375 33.7812 24.2758 33.7812 24.0781V12.5781C33.7812 12.3805 33.6195 12.2188 33.4219 12.2188H29.8281C29.6305 12.2188 29.4688 12.3805 29.4688 12.5781V24.0781C29.4688 24.2758 29.6305 24.4375 29.8281 24.4375ZM39.5312 5.03125H6.46875C5.67363 5.03125 5.03125 5.67363 5.03125 6.46875V39.5312C5.03125 40.3264 5.67363 40.9688 6.46875 40.9688H39.5312C40.3264 40.9688 40.9688 40.3264 40.9688 39.5312V6.46875C40.9688 5.67363 40.3264 5.03125 39.5312 5.03125ZM37.7344 37.7344H8.26562V8.26562H37.7344V37.7344Z"
            fill="#F36A8D"
          />
        </svg>
        <a href={project.url} target="_blank" className="">
          <svg
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-3 h-6 w-auto stroke-black hover:stroke-myPink duration-100 cursor-pointer"
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

      <h1 className="font-Poppins font-semibold text-xl mb-2 ">
        {project.name}
      </h1>
      <p className="font-Poppins text-sm">{project.description}</p>
      <div className="w-full h-auto flex flex-wrap mt-8">
        {project.technologies.map((technology) => (
          <div className="rounded-lg bg-myPink  px-3 py-1  font-Poppins font-semibold text-white text-xs inline mb-2 mr-2">
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
