import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactPage extends Component {
    render() {
        return (
            <div className="contactPage">

            <div className="contactText">
                CONTACT PAGE CURRENTLY UNDER CONSTRUCTION. <br/>
                Thank you for visiting!
            </div>

            <div className="backToHomeDiv">
                <Link className='backToHome' to='/'>Go back to Home Page</Link> 
            </div>
            
                
            </div>
        )
    }
}

