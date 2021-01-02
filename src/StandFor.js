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
                                Things I stand for:
                            </p>
                            <p className='standForList'>  
                                            
                            Equality for all genders<br/>
                            
                            Anti-Racism <br/>
                            Anti-Fascism <br/>   
                            Anti-Classism <br/> 
                            Anti-Ageism <br/>
                            Anti-Ableism <br/>
                            Body-positivity <br/>
                            Trans Rights <br/>
                            Downfall of Patriarchy <br/>                                                   
                            Community & collaboration <br/>      
                            Mutual-Aide <br/>
                            Genuine connection and honesty in all things <br/>
                            Mental Health advocacy <br/>
                            Holding people up! instead of pulling them down <br/>
                            Building a non-hierarchal world together <br/>

                            </p>                                   
                        </div>
                </div>
            </>
            </div>
        )
    }
}
