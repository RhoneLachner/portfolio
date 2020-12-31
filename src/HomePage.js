import React, { Component } from 'react';
import BannerLinks from './BannerLinks';
// import computerLeaves from './images/computer-leaves.jpg';
// import rhoneFlute from './images/rhone-flute.png';
import rhoneFluteDark from './images/rhone-dark-flute.png';
// import rhoneFluteCloseup from './images/rhone-flute-closeup.png';
import downArrow from './images/down-arrow-pretty.png';

export default class HomePage extends Component {
    render() {
        return (
        <>
        {/* <div className="container">
            <h1 className="glow">Hello! Welcome to the home page. <br/>This website is currently under construction.</h1>
        </div> */}

            <div className="titleName">
                <h1>RHONE LACHNER</h1>
            </div>
        <form>
            <div className='bannerLinks'>
                <BannerLinks></BannerLinks>
            </div>

            <div className='mainImageDiv'>
                {/* <img className='mainImageComputer'src= {computerLeaves} alt="computer-leaves"></img> */}
                {/* <img className='mainImageRhoneFlute'src= {rhoneFlute} alt="rhone-flute"></img> */}
                <img className='mainImageRhoneFlute'src= {rhoneFluteDark} alt="rhone-flute"></img>
                {/* <img className='mainImageRhoneFlute'src= {rhoneFluteCloseup} alt="rhone-flute"></img> */}
            </div>

            <div className="downArrowDiv">
            <img className='downArrowImage'src= {downArrow} alt="scroll downward"></img>
            </div>

            <span className="rhoneIs">Rhone is a Full Stack Software Engineer <br/> based in Portland, OR.</span>

            <div className='bioDiv'>
                <p className='bioText'>
                    
                    With a creative eye, positive outlook, adaptive resillience, and broad skillset, they bring a
                    methodical and wholistic apporoach to all that they do. <br/><br/>
                    Rhone is an innovative problem solver, empathetic team builder, and communicative collaborator thriving in both team and solo environments. <br/><br/>
                    They aim to create memorable, useful, and aesthetically pleasing applications that enrich people's lives,
                    bridging the gap between the physical and digital worlds. 

                </p>
            </div>

           
        </form>
        </>

        )
    }
}
