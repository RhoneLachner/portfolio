import React from 'react';
import BannerLinks from './HomePage/components/BannerLinks';
import Bio from './HomePage/sections/Bio';
import Projects from './HomePage/sections/Projects';
import PlacesHome from './HomePage/sections/PlacesHome';
import StandFor from './HomePage/sections/StandFor';
import MiscSkills from './HomePage/sections/MiscSkills';
import SayHello from './HomePage/components/SayHelloComponent/SayHello';
import AudioPlayer from './HomePage/components/AudioPlayerComponent/AudioPlayer';
import circleText from '../assets/images/circle-text3.png';
import rhoneFluteDark from '../assets/images/rhone-dark-flute2.jpg';
import downArrow from '../assets/images/down-arrow-pretty.png';
import rhoneFluteLayers from '../assets/images/portfolio-layers-notitle.png';
import ToggledImagesWithMailModal from './HomePage/components/ToggledImageComponent/ToggledImageWithMailModal';

const HomePage = () => {
  return (
    <>
      <a name="top"></a>

      <div className="circleDiv">
        <img src={circleText} className="circleImage" alt="circletext" />
        <AudioPlayer />
      </div>

      <div className="titleName">
        <h1>RHONE LACHNER</h1>
      </div>
      <form>
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
          <img className="downArrowImage" src={downArrow} alt="scroll downward" />
        </div>

        <Bio />

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
        </div>

        <Projects />

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
        </div>

        <div className="mobileLists">

          <PlacesHome />

          <div className="secondDownArrowDiv">
            <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
          </div>

          <StandFor />

          <div className="secondDownArrowDiv">
            <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
          </div>

          <MiscSkills />
        </div>

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
        </div>

        <SayHello />
      </form>
    </>
  );
};

export default HomePage;
