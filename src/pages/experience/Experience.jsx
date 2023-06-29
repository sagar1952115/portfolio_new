import React from "react";
import "./Experience.css";
import ExperienceTimeline from "./ExperienceTimeline";
import data from "../../experience";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div>
      <div className="exp-container">
        <div className="exp-title">WORK EXPERIENCE</div>
        <Link className="none" to="/">
          <p className="hheader-right">
            SAGAR <span>KUMAR</span>
          </p>
        </Link>
        {data.length > 0 && (
          <div className="experience-timeline">
            <div className="experience-outer">
              {data.map((data, idx) => (
                <ExperienceTimeline data={data} key={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
