import React from "react";
import { ExternalLink } from "react-external-link";
import plant from "../../../../assets/images/plant-concrete.png";
import FadeInAnimation from "../../../../utils/animation/motionAnimation";
import "./aboutMeLists.css";

const StandFor = () => {
  return (
    <div>
      <>
        <FadeInAnimation
          wrapperElement="div"
          direction="right"
          className="standFor"
        >
          <div className="container">
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
                Building a non-hierarchal world together <br /> <br />
                CAUSES TO DONATE TO LINKED BELOW: <br />
              </p>
              <div className="standForLinkList">
                <ExternalLink href="https://translifeline.org/">
                  <p className="causeLink">TransLifeline</p>
                </ExternalLink>{" "}
                <br />
                <ExternalLink href="https://bluemountainsbiodiversityproject.org/">
                  <p className="causeLink">
                    Blue Mountains Biodiversity Project
                  </p>
                </ExternalLink>{" "}
                <br />
                <ExternalLink href="https://portlandrescuemission.org/">
                  <p className="causeLink">Portland Rescue Mission</p>
                </ExternalLink>{" "}
                <br />
                <ExternalLink href="https://www.dontshootpdx.org/">
                  <p className="causeLink">Don't Shoot PDX</p>
                </ExternalLink>{" "}
                <br />
              </div>
            </div>
          </div>
        </FadeInAnimation>
      </>
    </div>
  );
};

export default StandFor;
