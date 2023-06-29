import React from "react";
import "./Education.css";

const TimeLineItem = ({ data }) => (
  <div className="timeline-card">
    <div className="timeline-info">
      <time>{data.date}</time>
      <p className="college">{data.text}</p>
      <p className="deg">{data.name}</p>
      <p className="course">{data.course}</p>
    </div>
  </div>
);
export default TimeLineItem;
