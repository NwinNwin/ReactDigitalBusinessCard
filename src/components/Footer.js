import React from "react";
import insta from "../images/insta.png";
import github from "../images/github.png";
export default function Footer() {
  return (
    <footer>
      <img className="insta-logo" src={insta} />
      <img className="github-logo" src={github} />
    </footer>
  );
}
