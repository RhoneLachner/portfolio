import React, { Component } from 'react';
import FadeInAnimation from './FadeService/fadeService';

export default class Bio extends Component {
    render() {
        return (
            <>  
                <span className="rhoneIs">Hello! My name is Rhone, and I am a Full Stack Software Engineer <br/> based in Portland, OR.</span>
                <div className='bioDiv'>
                    <FadeInAnimation wrapperElement="p"   className='bioText'>
                        With a creative eye, positive outlook, adaptive resilience, and broad skillset, I bring a
                        methodical and holistic approach to all that I do. <br/><br/>
                        I am an innovative problem solver, empathetic team builder, and communicative collaborator thriving in both team and solo environments, <br/>
                        and I believe that every business is made better with an inclusive and diverse array of perspectives and backgrounds. <br/><br/>
                        In 2022 I am focusing much of my energy on the creative aspects of coding, accessibility, and learning new mediums 
                        to help bridge the gap <br></br> between physical and digital worlds. 
                    </FadeInAnimation>
                </div>
            </>
        )
    }
}

