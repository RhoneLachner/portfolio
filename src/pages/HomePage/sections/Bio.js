import React, { Component } from "react";
import FadeInAnimation from "../../../utils/animation/motionAnimation";

export default class Bio extends Component {
  render() {
    return (
      <>
        <span className="rhoneIs">
          Hello! My name is Rhone, and I am a Full Stack Software Engineer{" "}
          <br /> based in Portland, OR.
        </span>
        <div className="bioDiv">
          <FadeInAnimation wrapperElement="p" className="bioText">
            Hello! My name is Rhone and I am a Full-Stack Software Engineer,
            Associate Product Manager, and Musician based in Vancouver, WA. <br /><br />
            With a creative eye, positive outlook, adaptive resilience, and broad
            skillset, I bring a methodical, human-centered, and holistic
            approach to all that I do. <br /><br />
         
            In 2023: I will be shifting more of my professional focus into Technical Product Management with
            the intention of incorporating several of my skillsets into a single
            holistic setting. <br /><br />
            I will be focusing much of my personal time on
            Software Engineering volunteer work, creative coding, music
            production, 3D design exploration, and preparing to record a new
            album with my band.
            <br /><br />
            Thank you for taking a look at my portfolio!
          </FadeInAnimation>
        </div>
      </>
    );
  }
}
