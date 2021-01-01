import React, { Component } from 'react';
import BannerLinks from './BannerLinks';
import Bio from './Bio.js';
import TechStack from './TechStack.js';

import rhoneFluteDark from './images/rhone-dark-flute.png';
import downArrow from './images/down-arrow-pretty.png';


export default class HomePage extends Component {
    render() {
        return (
        <>      
                <div className="titleName">
                    <h1>RHONE LACHNER</h1>
                </div>
        <form>
                <div className='bannerLinks'>
                    <BannerLinks></BannerLinks>
                </div>

                <div className='mainImageDiv'>               
                    <img className='mainImageRhoneFlute'src= {rhoneFluteDark} alt="rhone-flute"></img>                
                </div>

                <div className="downArrowDiv">
                    <img className='downArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

                <Bio></Bio>  
  
                <div className="secondDownArrowDiv">
                     <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

                <TechStack></TechStack>      

                <div className="secondDownArrowDiv">
                     <img className='secondDownArrowImage'src= {downArrow} alt="scroll downward"></img>
                </div>

        </form>
        </>

        )
    }
}
