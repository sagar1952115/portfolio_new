import React from "react";
import ProjectItem from "../project/ProjectItem";

import "./Experience.css";

const ExperienceTimeline = ({ data }) => (
  <div className="timeline-card">
    <div className="timeline-info">
      <time>{data.date}</time>
      <p className="org">
        <a
          rel="noreferrer"
          target="_blank"
          className="none"
          href="https://physifit.org"
        >
          {data.org}
        </a>
      </p>
      <p className="desig">{data.desig}</p>
      <div className="intern-desc">
        {data.res.map((curr, i) => {
          return <li key={i}>{curr}</li>;
        })}
      </div>
      <div className="intern-tech">
        {data.tech.map((curr, i) => {
          return <li key={i}>{curr}</li>;
        })}
      </div>{" "}
      {/* <span className="circle" /> */}
    </div>
  </div>
);
export default ExperienceTimeline;
