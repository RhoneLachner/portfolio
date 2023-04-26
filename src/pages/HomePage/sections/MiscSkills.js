import React, { Component } from "react";
import medicine from "../../../assets/images/medicine.png";
import FadeInAnimation from "../../../utils/animation/motionAnimation";

export default class MiscSkills extends Component {
  render() {
    return (
      <div>
        <>
          <FadeInAnimation
            wrapperElement="div"
            direction="left"
            className="placesHome"
          >
            <div className="skillsContainer">
              <div className="skills__text">
                <p className="skillsTop">Misc. Hobbies & Skills:</p>
                <p className="skillsList">
                  Licensed Massage Therapy <br />
                  Western Herbal Medicine <br />
                  Ancestral survival skills <br />
                  Homesteading <br />
                  Sustainable Gardening <br />
                  Music Composition & Performance <br />
                  Digital Photography <br />
                  Self-Defense <br />
                  Natal Chart Astrology Readings <br />
                </p>
              </div>
              <img
                className="skills__image"
                src={medicine}
                alt="herbal medicine"
              ></img>
            </div>
          </FadeInAnimation>
        </>
      </div>
    );
  }
}
