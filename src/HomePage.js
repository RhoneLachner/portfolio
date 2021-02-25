import React, { Component } from 'react';
import BannerLinks from './BannerLinks';
import Bio from './Bio.js';
import TechStack from './TechStack.js';
import Projects from './Projects.js';
import PlacesHome from './PlacesHome.js';
import StandFor from './StandFor.js';
import MiscSkills from './MiscSkills';
import SayHello from './SayHello.js';

import circleText from './images/circle-text.png';
import rhoneFluteDark from './images/rhone-dark-flute2.jpg';
import downArrow from './images/down-arrow-pretty.png';


export default class HomePage extends Component {
    render() {
        return (

        <>      
                 <a name="top"></a>
<div className="circleDiv">
<img src={circleText} className="circleImage" alt="circletext"/>
</div>
                <div className="titleName">
                   
                    <h1>RHONE LACHNER</h1>
                    
                </div>
        <form>
                <div className='bannerLinks'>
                    <BannerLinks></BannerLinks>
                </div>

                <div className='mainImageDiv'>               
                    <img className='mainImageRhoneFlute'src= {rhoneFluteDark} ></img>                
                </div>

                <div className="downArrowDiv">
                    <img className='downArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

                <Bio></Bio>  
  
                <div className="secondDownArrowDiv">
                     <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

                <Projects></Projects>

                <div className="secondDownArrowDiv">
                     <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

                <div className="mobileLists">
                    <TechStack></TechStack>      

                    <div className="secondDownArrowDiv">
                        <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                    </div>
                    
                    <PlacesHome></PlacesHome>

                    <div className="secondDownArrowDiv">
                        <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                    </div>

                    <StandFor></StandFor>

                    <div className="secondDownArrowDiv">
                        <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                    </div>

                    <MiscSkills></MiscSkills>

                </div>

                    <div className="secondDownArrowDiv">
                        <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                    </div>
                

                <SayHello></SayHello>

        </form>
        </>

        )
    }
}
