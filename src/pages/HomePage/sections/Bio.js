import React from "react";
import FadeInAnimation from "../../../utils/animation/motionAnimation";

const Bio = () => {
  return (
    <>
      <span className="rhoneIs">
        Hello! My name is Rhone and I am a Full-Stack Software Engineer,
        <br></br>
        Product Manager, and Musician based in Vancouver, WA.
      </span>
      <div className="bioDiv">
        <FadeInAnimation wrapperElement="p" className="bioText">
          <br />
          With a creative eye, positive outlook, adaptive resilience, and broad
          skillset, I bring a methodical, human-centered, and holistic approach
          to all that I do. <br />
          <br />
          In 2023:
          <br />
          <br />
          I have shifted much of my professional focus into Technical Product
          Management with the intention of incorporating several of my skillsets
          into a single holistic setting. <br />
          <br />
          I will be focusing much of my personal time on Software Engineering
          volunteer work, creative coding, music production, 3D design
          exploration, learning new technologies, and preparing to record a new
          album with my band.
          <br />
          <br />
          Thank you for taking a look at my portfolio!
        </FadeInAnimation>
      </div>
    </>
  );
};

export default Bio;
