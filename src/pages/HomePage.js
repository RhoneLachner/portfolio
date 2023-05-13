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
      <a href="top"  aria-label="Link to return to top of page">  <span id="visually-hidden-content-for-a11y">Return to top</span>
</a>

      <div className="circleDiv">
        <img src={circleText} className="circleImage" alt="circletext" aria-label="circle around play button reading: chill out here."/>
        <AudioPlayer />
      </div>

      <div className="titleName">
        <h1>RHONE LACHNER</h1>
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
          <img className="downArrowImage" src={downArrow} alt="scroll downward" aria-label="Downward arrow icon"/>
        </div>

        <Bio />

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward"  aria-label="Downward arrow icon"/>
        </div>

        <Projects />

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward"  aria-label="Downward arrow icon"/>
        </div>

        <div className="mobileLists">

          <PlacesHome />

          <div className="secondDownArrowDiv">
            <img className="secondDownArrowImage" src={downArrow} alt="scroll downward"  aria-label="Downward arrow icon"/>
          </div>

          <StandFor />

          <div className="secondDownArrowDiv">
            <img className="secondDownArrowImage" src={downArrow} alt="scroll downward"  aria-label="Downward arrow icon"/>
          </div>

          <MiscSkills />
        </div>

        <div className="secondDownArrowDiv">
          <img className="secondDownArrowImage" src={downArrow} alt="scroll downward"  aria-label="Downward arrow icon"/>
        </div>

        <SayHello />
      </div>
    </>
  );
};

export default HomePage;
