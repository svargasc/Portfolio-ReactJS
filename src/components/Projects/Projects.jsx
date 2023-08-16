import React from "react";
import { Header } from "../Header/Header";
import projects from "../../assets/projects";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center items-center w-screen">
        <div className="tarjet flex gap-10 p-6">
          {projects.map((project) => (
            <div
              className="bg-[#301043] w-11/12 flex flex-col justify-center py-4 items-center rounded-md"
              key={project.id}
            >
              <h1 className="text-4xl font-semibold p-2 text-[#fff]">
                {project.title}
              </h1>
              <img className="" src={project.img} alt="projects" />
              <h2 className="text-[#fff]">{project.description}</h2>
              <button className="bg-[#402c68] font-semibold text-lg w-40 rounded-md text-[#fff] my-4">
                <NavLink to={project.url} target="_blank">
                  View
                </NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
