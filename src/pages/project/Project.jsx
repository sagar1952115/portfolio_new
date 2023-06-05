import React from "react";
import "./Project.css";
import data from "../../project";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div>
      <div className="project-container">
        <div className="project-title">MY PROJECTS</div>
        <Link className="none" to="/">
          <p className="hheader-right">
            SAGAR <span>KUMAR</span>
          </p>
        </Link>
        {data.map((curr, i) => {
          return <ProjectItem key={i} data={curr} />;
        })}
      </div>
    </div>
  );
};

export default Project;
