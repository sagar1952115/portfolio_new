import React from "react";
import "./Education.css";
import TimeLineItem from "./TimeLineItem";
import data from "../../education";

const Education = () => {
  return (
    <div>
      <div className="education-container">
        <div className="education-title">Education</div>
      </div>
      {data.length > 0 && (
        <div className="timeline-container">
          {data.map((data, idx) => (
            <TimeLineItem data={data} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
