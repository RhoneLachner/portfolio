import React, { Component } from 'react'
import computerForest from './images/computer-forest-bw.png';
import FadeInAnimation from './FadeService/fadeService';

export default class TechStack extends Component {
    render() {
        return (
            <>
             <FadeInAnimation wrapperElement="div" direction="right" className="techStack1">
            <div className='container'>            
                <img className='computer__image'src= {computerForest} alt="computer in forest"></img>           
                    <div className='techStack__text'>             
                        <p className='techStackTop'> 
                            Current Tech Stack 2021: 
                        </p>
                        <p className='techStackList'>                        
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
            </FadeInAnimation>
            </>
        )
    }
}
