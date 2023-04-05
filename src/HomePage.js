import React, {useEffect} from 'react';
import BannerLinks from './BannerLinks';
import Bio from './Bio.js';
import TechStack from './TechStack.js';
import Projects from './Projects.js';
import PlacesHome from './PlacesHome.js';
import StandFor from './StandFor.js';
import MiscSkills from './MiscSkills';
import SayHello from './SayHelloComponent/SayHello';
import AudioPlayer from './AudioPlayerComponent/AudioPlayer';
import circleText from './images/circle-text3.png';
import rhoneFluteDark from './images/rhone-dark-flute2.jpg';
import downArrow from './images/down-arrow-pretty.png';
import rhoneFluteLayers from './images/portfolio-layers-notitle.png';
import ToggledImagesWithMailModal from './ToggledImageComponent/ToggledImageWithMailModal';

const HomePage = () => {
    useEffect(() => {
        document.body.style.overflowX = "hidden";
        return () => {
          document.body.style.overflowX = "";
        };
      }, []);
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
          <TechStack />

          <div className="secondDownArrowDiv">
            <img className="secondDownArrowImage" src={downArrow} alt="scroll downward" />
          </div>

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
