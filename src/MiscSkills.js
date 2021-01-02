import React, { Component } from 'react';
import medicine from './images/medicine.png';

export default class MiscSkills extends Component {
    render() {
        return (
            <>
            <div className='skillsContainer'>            
                     
                    <div className='skills__text'>             
                        <p className='skillsTop'> 
                            Misc. Skills: 
                        </p>
                        <p className='skillsList'>  
                                           
                            Licensed Massage Therapy <br/>
                            Western Herbal Medicine <br/>
                            Ancestral survival skills <br/>    
                            Homesteading <br/>
                            Sustainable Gardening <br/>
                            Music Composition & Performance <br/>                                                    
                            Digital Photography <br/>                            
                            Natal Chart Astrology Readings <br/>      
                            Firearm Safety Training <br/>
                           
                        </p>                                   
                    </div>

                    <img className='skills__image'src= {medicine} alt="herbal medicine"></img>           
                        
            </div>
            </>
        )
    }
}

