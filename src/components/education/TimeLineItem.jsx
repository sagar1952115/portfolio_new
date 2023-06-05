import React from "react";
import "./Education.css";

const TimeLineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.date}</time>
      <p className="deg">{data.name}</p>
      <p className="college">{data.text}</p>
      <p className="course">{data.course}</p>
      <span className="circle" />
    </div>
  </div>
);
export default TimeLineItem;
