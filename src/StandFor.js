import React, { Component } from 'react';
import plant from './images/plant-concrete.png';

export default class StandFor extends Component {
    render() {
        return (
            <div>
             <>
                <div className='container'>            
                        <img className='plant__image'src= {plant} alt="plant growing"></img>           
                            
                        

                        <div className='standFor__text'>             
                            <p className='standForTop'> 
                                Current Tech Stack 2021: 
                            </p>
                            <p className='standForList'>  
                                            
                                LANGUAGES ▸ Javascript, HTML, CSS <br/>
                                FRONT END ▸ React, Redux <br/>
                                BACK END ▸ NodeJs, Express <br/>
                                TESTING ▸ Jest, QUnit <br/>
                                DATABASES ▸ SQL <br/>
                                TOOLS ▸ VS Code, Github, Slack, Heroku, Postman, Netlify, Photoshop, GarageBand <br/>
                                STACK ▸ MERN 
                            </p>                                   
                        </div>
                </div>
            </>
            </div>
        )
    }
}
