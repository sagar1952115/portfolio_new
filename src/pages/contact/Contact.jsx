import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  var templateParams = {
    name,
    email,
    message,
  };
  var payload1 = JSON.stringify(templateParams);
  var payload = JSON.parse(payload1);
  // const str = templateParams.Stringify;
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .send("service_2ss64bf", "template_nkh72rj", payload, "XR2APrBljiMBt1xcS")
      .then(
        (result) => {
          // show the user a success message
          toast.success("Message sent successfully");
        },
        (error) => {
          // show the user an error
          toast.error("Error in sending message");
        }
      );
  };
  return (
    <div>
      <div className="contact-container">
        <div className="contact-mini-container">
          <div className="contact-left">
            <div className="contact-title">CONTACT ME</div>
            <Link className="none" to="/">
              <p className="hheader-right">
                SAGAR <span>KUMAR</span>
              </p>
            </Link>
            <div className="contact-info">
              Need to get in touch with me? Either fill out the form with your
              query or contact with the options below.
            </div>
            <div className="contact-options">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-value">1234sagarkumar12@gmail.com</div>
            </div>
            <div className="contact-options">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-value">+91 8210628264</div>
            </div>
            <div className="contact-options">
              <div className="contact-icon">
                <TiLocation />
              </div>
              <div className="contact-value">
                Rangamatia,Dhanbad,Jharkhand,828122
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-right-title">Get in Touch</div>
            <div className="contact-form">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Write your queries here"
              ></textarea>
              {/* eslint-disable-next-line */}
              <a href="#" onClick={sendEmail} className="animated-button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
