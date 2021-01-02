import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SayHello extends Component {
    render() {
        return (
            <form className="sayHi">

                <div className="thankYouText">
                    You have reached the bottom. <br/>
                    Thank you for scrolling!
                </div>

                <div className="sayHiText">
                    Say Hello.
                </div>


                <div className="sayHiLinks">

                <a className="toTop" href="#top">Back to top of page</a>

                <Link className='contactHi' to='/contact'>Contact</Link> 
                </div>
                
            </form>
        )
    }
}
