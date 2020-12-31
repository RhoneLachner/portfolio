import React, { Component } from 'react';
import computerLeaves from './computer-leaves.jpg';

export default class HomePage extends Component {
    render() {
        return (
        <>
        {/* <div className="container">
            <h1 className="glow">Hello! Welcome to the home page. <br/>This website is currently under construction.</h1>
        </div> */}

            <div className="titleName">
                <h1>RHONE  LACHNER</h1>
            </div>
        <form>
            <div className='bannerLinks'>
                [  ].............[  ].............[  ].............[  ] 
            </div>

            <div className='mainImageDiv'>
                <img className='mainImageComputer'src= {computerLeaves} alt="computer-leaves"></img>
            </div>

            <div className='bioDiv'>
                <p className='bioText'>
                    Rhone is a Full Stack Software Engineer <br/> based in Portland, OR. <br/>
                    With a creative eye, unyielding passion, and broad skillset, Rhone brings a methodical,
                    innovative, and wholistic apporoach to all that they do. <br/>
                    They aim to create memorable, useful, and aesthetically pleasing applications that enrich people's lives,
                    bridging the gap between the physical and digital worlds.
                </p>
            </div>



        </form>
        </>

        )
    }
}
