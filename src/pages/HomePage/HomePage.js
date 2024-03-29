import React from "react";
import BannerLinks from "../HomePage/components/BannerLinks/BannerLinks";
import Bio from "../HomePage/sections/Bio/Bio";
import Projects from "../HomePage/sections/Projects/Projects";
import PlacesHome from "../HomePage/sections/AboutMeLists/PlacesHome";
import StandFor from "../HomePage/sections/AboutMeLists/StandFor";
import MiscSkills from "../HomePage/sections/AboutMeLists/MiscSkills";
import SayHello from "../HomePage/components/SayHelloComponent/SayHello";
import AudioPlayer from "../HomePage/components/AudioPlayerComponent/AudioPlayer";
import circleText from "../../assets/images/audio-player-circle-text.webp";
import rhoneFluteDark from "../../assets/images/dark-flute-layer-1.webp";
import downArrow from "../../assets/images/down-arrow-icon.webp";
import rhoneFluteLayers from "../../assets/images/dark-flute-layer-2.webp";
import ToggledImagesWithMailModal from "../HomePage/components/ToggledImageComponent/ToggledImageWithMailModal";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <a href="top" aria-label="Link to return to top of page">
        {" "}
        <span id="visually-hidden-content-for-a11y">Return to top</span>
      </a>

      <div className="circleDiv">
        <img
          src={circleText}
          className="circleImage"
          alt="circletext"
          aria-label="circle around play button reading: chill out here."
        />
        <AudioPlayer />
      </div>

      <div className="titleNameDiv">
        <h1 className="titleText">RHONE LACHNER</h1>
      </div>
      <div>
        <div className="bannerLinks">
          <BannerLinks />
        </div>

        <div className="mainImageDiv">
          <div className="mainImageRhoneFlute">
            <ToggledImagesWithMailModal
              imageA={rhoneFluteDark}
              imageB={rhoneFluteLayers}
            />
          </div>
        </div>

        <div className="downArrowDiv">
          <img
            className="downArrowImage"
            src={downArrow}
            alt="scroll downward"
            aria-label="Downward arrow icon"
          />
        </div>

        <Bio />

        <div className="secondDownArrowDiv">
          <img
            className="secondDownArrowImage"
            src={downArrow}
            alt="scroll downward"
            aria-label="Downward arrow icon"
          />
        </div>

        <Projects />

        <div className="secondDownArrowDiv">
          <img
            className="secondDownArrowImage"
            src={downArrow}
            alt="scroll downward"
            aria-label="Downward arrow icon"
          />
        </div>

        <div className="mobileLists">
          <PlacesHome />

          <div className="secondDownArrowDiv">
            <img
              className="secondDownArrowImage"
              src={downArrow}
              alt="scroll downward"
              aria-label="Downward arrow icon"
            />
          </div>

          <StandFor />

          <div className="secondDownArrowDiv">
            <img
              className="secondDownArrowImage"
              src={downArrow}
              alt="scroll downward"
              aria-label="Downward arrow icon"
            />
          </div>

          <MiscSkills />
        </div>

        <div className="secondDownArrowDiv">
          <img
            className="secondDownArrowImage"
            src={downArrow}
            alt="scroll downward"
            aria-label="Downward arrow icon"
          />
        </div>

        <SayHello />
      </div>
    </>
  );
};

export default HomePage;
