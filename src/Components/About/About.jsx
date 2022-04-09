import React from "react";
import "./About.css";
import footerimg from "../../Assets/Background/footerimg.svg";
function About() {
  return (
    <div className="about">
      <img className="about__img" src={footerimg} />
    </div>
  );
}
export default About;
