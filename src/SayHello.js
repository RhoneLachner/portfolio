import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FadeInAnimation from './FadeService/fadeService';


export default class SayHello extends Component {
    render() {
        return (
            <form className="sayHi">

                <FadeInAnimation wrapperElement="div" direction="down" className="thankYou">
                <div className="thankYouText">
                    You have reached the bottom. <br/>
                    Thank you for scrolling!
                </div>
                </FadeInAnimation>
                <FadeInAnimation wrapperElement="div" className="sayHello">
                <div className="sayHiText">
                    Say Hello.
                </div>
                </FadeInAnimation>
                <FadeInAnimation wrapperElement="div" direction="right" className="linksHello">
                <div className="sayHiLinks">

                <a className="toTop" href="#top">Back to top of page</a>

                <Link className='contactHi' to='/contact'>Contact</Link> 
                </div>
                </FadeInAnimation>
                
            </form>
        )
    }
}
