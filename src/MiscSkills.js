import React, { Component } from 'react';
import medicine from './images/medicine.png';

export default class MiscSkills extends Component {
    render() {
        return (
            <>
            <div className='placesContainer'>            
                     
                    <div className='places__text'>             
                        <p className='placesTop'> 
                            Misc. Skills: 
                        </p>
                        <p className='placesList'>  
                                           
                            TEXT TEXT TEXT TEXT TEXT <br/>
                            TEXT TEXT TEXT TEXT TEXT <br/>
                            TEXT TEXT TEXT TEXT TEXT <br/>    
                            TEXT TEXT TEXT TEXT TEXT <br/>                                                    
                            TEXT TEXT TEXT TEXT TEXT <br/>                            
                            TEXT TEXT TEXT TEXT TEXT <br/>      
                            TEXT TEXT TEXT TEXT TEXT <br/>
                           
                        </p>                                   
                    </div>

                    <img className='places__image'src= {medicine} alt="herbal medicine"></img>           
                        
            </div>
            </>
        )
    }
}

