import React from "react";
import Hero from "../../assets/hero1.jpeg";
import "./About.css";
import Skills from "../../components/skills/Skills";
import Resume from "../../assets/sagar_resume.pdf";
import Education from "../../components/education/Education";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsMenuButtonWideFill } from "react-icons/bs";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-header">
          <div className="about-title">ABOUT ME</div>
          <Link className="none" to="/">
            <p className="hheader-right">
              SAGAR <span>KUMAR</span>
            </p>
          </Link>
          <div className="about-content">
            <div className="acontent-left">
              <div className="acontent-parent">
                <div className="acontent-child">
                  <img src={Hero} alt="" />
                </div>
              </div>
            </div>
            <div className="acontent-right">
              <div className="acontent-right-content">
                "I am a Full stack MERN developer having an experience of more
                than 1 year as an full stack developer intern in a real time
                project.I love exploring new technologies and currently deep
                diving into Golang. I love solving DSA problems and have 6⭐
                rating on Hackerrank. I also have 1700+ contest rating on
                leetcode and moving towards knight badge. I am in my final year
                of my college and looking for an exiting Software developer
                role."
              </div>
              <a href={Resume} download className="animated-button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Education />
      <div className="about-footer">
        <li>
          <AiFillLinkedin className="social-icon" />
        </li>{" "}
        <li>
          <AiFillInstagram className="social-icon" />
        </li>{" "}
        <li>
          <AiFillGithub className="social-icon" />
        </li>{" "}
        <li>
          <SiLeetcode className="social-icon" />
        </li>{" "}
      </div>
    </div>
  );
};

export default About;
