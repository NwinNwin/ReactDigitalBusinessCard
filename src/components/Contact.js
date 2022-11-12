import React from "react";
import email from "../images/email_logo.png";
import linkedin from "../images/linkedin.png";

export default function Contact() {
  return (
    <>
      <h1 className="name-text">Dang Nguyen</h1>
      <h2 className="role-text">Developer</h2>
      <h3 className="insta-text">nwin.nwin</h3>
      <div className="contact-btn">
        <button className="email-btn">
          <img className="email-logo" src={email} />
          Email
        </button>
        <button className="linkedin-btn">
          <img className="email-logo" src={linkedin} />
          LinkedIn
        </button>
      </div>
    </>
  );
}
