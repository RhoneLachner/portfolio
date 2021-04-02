import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';

export default class ContactPage extends Component {
    render() {
        return (
        <div className="contactPage">
            <div className="contactText">
                CONTACT PAGE CURRENTLY UNDER CONSTRUCTION. 
                <br/><br/>
                Please feel free to reach out to me via 
                    <ExternalLink href="https://www.linkedin.com/in/rhonelachner/">
                        <span className="linkedInContactPage"> LinkedIn </span>
                    </ExternalLink> 
                 or by email at fernandclay@gmail.com 
                <br/><br/>
                Thank you for visiting! <br/>
            </div>

            <div className="backToHomeDiv">
                <Link className='backToHome' to='/'>Go back to Home Page</Link> 
            </div>
        </div>
        )
    }
}

