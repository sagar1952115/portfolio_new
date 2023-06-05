import React from "react";
import "./Header.css";
import WavingHand from "../../assets/hi.gif";
import Hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
const Header = () => {
  return (
    <div>
      <div className="homepage-container">
        <div className="homepage-header">
          <div className="hheader-left">
            Hii
            <span>
              <img src={WavingHand} alt="" />
            </span>
          </div>
          <div className="hheader-middle">
            <img src={Hero} alt="" />
          </div>
          <Link className="none" to="/">
            <p className="hheader-right">
              SAGAR <span>KUMAR</span>
            </p>
          </Link>
        </div>
        <div className="homepage-name">SAGAR KUMAR</div>
        <div className="homepage-footer">
          <div className="hfooter-left">
            <p>Full Stack Developer</p>
            <p>
              From <span>India</span>
            </p>
          </div>
          <div className="hfooter-right">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/sagar-kumar-73a25018b/"
              >
                <AiFillLinkedin className="social-icon" />
              </a>
            </li>{" "}
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/xhibt_003/"
              >
                <AiFillInstagram className="social-icon" />
              </a>
            </li>{" "}
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sagar1952115"
              >
                <AiFillGithub className="social-icon" />
              </a>
            </li>{" "}
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://leetcode.com/sagarkumar12"
              >
                <SiLeetcode className="social-icon" />
              </a>
            </li>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
