import React from "react";
import FadeInAnimation from "../../../../utils/animation/motionAnimation";

import "./sayHello.css";

const SayHello = () => {
  return (
    <div className="sayHi">
      <FadeInAnimation
        wrapperElement="div"
        direction="down"
        className="thankYou"
      >
        <div className="thankYouText">
          You have reached the bottom. <br />
          Thank you for scrolling!
        </div>
      </FadeInAnimation>
      <FadeInAnimation wrapperElement="div" className="sayHello">
        <div className="sayHiText">Say Hello.</div>
      </FadeInAnimation>
      <FadeInAnimation
        wrapperElement="div"
        direction="right"
        className="linksHello"
      >
        <div className="sayHiLinks">
          <a className="toTop" id="toTop" href="#top">
            Back to top of page
          </a>

          <a
            className="contactHi"
            id="contactHi"
            href="mailto:fernandclay@gmail.com"
          >
            Email
          </a>
        </div>
      </FadeInAnimation>
    </div>
  );
};

export default SayHello;
