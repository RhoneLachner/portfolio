import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MusicPage extends Component {
    render() {
        return (
            <div className="musicPage">
                
            <div className="musicText">
                MUSIC PAGE CURRENTLY UNDER CONSTRUCTION. <br/>
                Thank you for visiting!
            </div>

            <div className="backToHomeDiv">
                <Link className='backToHome' to='/'>Go back to Home Page</Link> 
            </div>

            </div>
        )
    }
}
