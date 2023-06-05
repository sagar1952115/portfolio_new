import React, { useState } from "react";
import "./Skills.css";
import { TbBrandCpp, TbBrandGolang, TbBrandJavascript } from "react-icons/tb";
import { DiCss3, DiJava } from "react-icons/di";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJira,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
const Skills = () => {
  const [active, setIsActive] = useState("frontend");
  return (
    <div>
      <div className="skill-container">
        <div className="skill-title">MY SKILLS</div>
        <div className="skill-options">
          <li
            className={`${active === "frontend" ? "active" : ""} skill`}
            onClick={() => setIsActive("frontend")}
          >
            Frontend
          </li>
          <li
            className={`${active === "backend" ? "active" : ""} skill`}
            onClick={() => setIsActive("backend")}
          >
            Backend
          </li>
          <li
            className={`${active === "tools" ? "active" : ""} skill`}
            onClick={() => setIsActive("tools")}
          >
            Tools & Language
          </li>
        </div>
        {active === "frontend" && (
          <div className="skill-icons">
            <FaReact className="skill-icon" />
            <SiTailwindcss className="skill-icon" />
            <DiCss3 className="skill-icon" />
            <SiRedux className="skill-icon" />
            <FaHtml5 className="skill-icon" />
          </div>
        )}
        {active === "backend" && (
          <div className="skill-icons">
            <FaNodeJs className="skill-icon" />
            <SiMongodb className="skill-icon" />
            <SiExpress className="skill-icon" />
            <TbBrandGolang className="skill-icon" />
          </div>
        )}
        {active === "tools" && (
          <div className="skill-icons">
            <TbBrandJavascript className="skill-icon" />
            <TbBrandCpp className="skill-icon" />
            <DiJava className="skill-icon" />
            <SiJira className="skill-icon" />
            <BsGit className="skill-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
