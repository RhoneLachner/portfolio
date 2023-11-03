import React from "react";
import plant from "../../../../assets/images/about-me-plant-concrete.webp";
import FadeInAnimation from "../../../../utils/animation/motionAnimation";
import "./aboutMeLists.css";

const StandFor = () => {
  return (
    <div>
      <FadeInAnimation
        wrapperElement="div"
        direction="right"
        className="standFor"
      >
        <div className="standForContainer">
          <img className="plant__image" src={plant} alt="plant growing"></img>
          <div className="standFor__text">
            <p className="standForTop">Things I stand for:</p>
            <p className="standForList">
              Equality and equity for all marginalized people
              <br />
              Environmental protection and restoration <br />
              Destroying that Glass Ceiling <br />
              Community & collaboration <br />
              Mutual-Aid <br />
              Genuine connection and honesty in all things <br />
              Accessibility in Web Design <br />
              Holding people up! instead of pulling them down <br />
              Building a non-hierarchal world together
            </p>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};

export default StandFor;
