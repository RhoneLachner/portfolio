import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';

export default class Projects extends Component {
    render() {
        return (
            <>
            <form className="projectForm">

                <div className="projectTitle">
                    Selected Development Projects:
                </div>

                <div className="projectItemTitle">
                Major Arcana Divinator App
                </div>

                <div className="projectItem">
                Oct 2020 – Present <br/>

                Vanilla JavaScript | Local Storage | CSS | HTML5 | GarageBand | Photosh <br/> <br/>

                In five days, my team planned and executed the construction of a user-friendly tarot reading app with aesthetically pleasing visuals and sounds, allowing the user to track past readings kept in local storage. With organization in mind and the ability to open our code to future expansion, we focused on clean code and structure in the backend.
I was involved in all aspects of this project. My favorite contributions were creating the data model including text from a written book older than the technology itself, and recording sounds with GarageBand and sound theory to implement within the event-listener functions of the app. I challenged myself in JavaScript and learned many tools that I hope to implement in future work including the use of local storage, event listeners, and looping functions.

                </div>
                      
                        <ExternalLink href="https://mystechal-divinators.github.io/project-week-tarot-divinators/index.html">
                        <div className="projectLink"> ✧ Go to App ✧ </div>
                        </ExternalLink>
                        
                        

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
                        
            </form>            

               

</>

           
        )
    }
}