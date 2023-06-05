import React from "react";

import "./Experience.css";

const ExperienceTimeline = ({ data }) => (
  <div className="experience-timeline-item">
    <div className="experience-timeline-item-content">
      <time>{data.date}</time>
      <p className="org">
        <a target="_blank" className="none" href="https://physifit.org">
          {data.org}
        </a>
      </p>
      <p className="desig">{data.desig}</p>
      <p className="res">{data.res}</p>
      <p className="tech"> {data.tech}</p>
      <span className="circle" />
    </div>
  </div>
);
export default ExperienceTimeline;
