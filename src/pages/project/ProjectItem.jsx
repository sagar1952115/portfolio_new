import React from "react";
import "./Project.css";

import { FaLink } from "react-icons/fa";
const ProjectItem = ({ data }) => {
  console.log(data.tech);
  return (
    <div>
      <div className="pitem-container">
        <div className="pitem-index">{data.no}</div>
        <div className="pitem-img">
          <img src={data.img} alt="" />
        </div>
        <div className="pitem-des">
          <div className="pitem-title">{data.name}</div>
          <div className="pitem-info">{data.des}</div>
          <div className="pitem-tech-list">
            {data.tech.map((curr, i) => {
              return <li key={i}>{curr}</li>;
            })}
          </div>
          <div className="pitem-btn">
            <div className="pitem-github-btn">
              <a
                rel="noreferrer"
                className="none"
                target="_blank"
                href={data.github_link}
              >
                Github <FaLink />
              </a>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              className="none"
              href={data.link}
            >
              <div className="pitem-live-btn">
                <div style={{ width: "max-content" }}>Live</div>
                <div className={`${data.live}`}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
