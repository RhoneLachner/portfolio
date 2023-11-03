import React from "react";
import medicine from "../../../../assets/images/about-me-medicine.webp";
import FadeInAnimation from "../../../../utils/animation/motionAnimation";
import "./aboutMeLists.css";

const MiscSkills = () => {
  return (
    <>
      <div>
        <FadeInAnimation
          wrapperElement="div"
          direction="left"
          className="placesHome"
        >
          <div className="skillsContainer">
            <div className="skills__text">
              <p className="skillsTop">Misc. Hobbies & Skills:</p>
              <p className="skillsList">
                Creative Coding <br />
                Web Design <br />
                Music Composition & Performance <br />
                Digital Photography <br />
                Licensed Massage Therapy <br />
                Western Herbal Medicine <br />
                Ancestral survival skills <br />
                Homesteading & Permaculture <br />
              </p>
            </div>
            <img
              className="skills__image"
              src={medicine}
              alt="herbal medicine"
            ></img>
          </div>
        </FadeInAnimation>
      </div>
    </>
  );
};

export default MiscSkills;
