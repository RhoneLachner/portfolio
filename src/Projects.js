import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import FadeInAnimation from './FadeService/fadeService';

export default class Projects extends Component {
    render() {
        return (
            <>
            <form className="projectForm">

            <FadeInAnimation wrapperElement="div" className="projectItem3">
                <div className="projectTitle">
                    Selected Development Projects:
                </div>
                <div className="projectItemTitle">
                     beHuman VS Code Extension 
                </div>
                <div className="projectItem">
                    Oct 2021 – Present <br/>
                    Node.js | JavaScript | Express | HTML | CSS | SQL | Heroku | Photoshop ﻿ <br/> <br/>
                    beHuman is a VS Code extension that alerts users to take a break from their screens at a time increment of choice. The alerts offer quick wellness tips, and an optional external link to instructional stretching videos focusing on common tension areas associated with desk work. My main contributions included time functions, CRUD routes, user-flow planning, and user-commands + shortcuts.
                </div>     
                        <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human">
                        <div className="projectLink"> ✧ Go to VS Code Market ✧ </div>
                        </ExternalLink>    
            </FadeInAnimation>
            <FadeInAnimation wrapperElement="div" className="projectItem1">     
                <div className="projectItemTitle">
                     Major Arcana Divinator App
                </div>
                <div className="projectItem">
                    Oct 2020 – Present <br/>
                    Vanilla JavaScript | Local Storage | CSS | HTML5 | GarageBand | Photoshop <br/> <br/>
                    In five days, my team planned and executed the construction of a user-friendly tarot reading app with aesthetically pleasing visuals and sounds, allowing the user to track past readings kept in local storage. With organization in mind and the ability to open our code to future expansion, we focused on clean code and structure in the backend.
                    I was involved in all aspects of this project. My favorite contributions were creating the data model including text from a written book older than the technology itself, and recording sounds with GarageBand and sound theory to implement within the event-listener functions of the app. I challenged myself in JavaScript and learned many tools that I hope to implement in future work including the use of local storage, event listeners, and looping functions.
                </div>
                        <ExternalLink href="https://mystechal-divinators.github.io/project-week-tarot-divinators/index.html">
                        <div className="projectLink"> ✧ Go to App ✧ </div>
                        </ExternalLink>
                </FadeInAnimation>
                <FadeInAnimation wrapperElement="div" className="projectItem2">
                <div className="projectItemTitle">
                    Karaoke Roulette App
                </div>
                <div className="projectItem">
                    Nov 2020 – Present <br/>
                    React / JavaScript / Node / SQL / CSS / Heroku / Netlify / Postman / Photoshop <br/> <br/>
                    In five days, my team planned and implemented a karaoke roulette application using the YouTube API, allowing users to select randomized karaoke songs to sing with friends. The user flow and design of this application allows participants to log in and save their favorite songs, and the user experience can be shared via video chat screen sharing for a safely social distanced karaoke party.
                </div>
                        <ExternalLink href="https://karaoke-roulette.netlify.app/">
                        <div className="projectLink"> ✧ Go to App ✧ </div>
                        </ExternalLink>
                </FadeInAnimation>
                        
            </form>            
</>   
        )
    }
}
