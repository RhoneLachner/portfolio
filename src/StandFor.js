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
                                            
                            TEXT TEXT TEXT TEXT TEXT <br/>
                            TEXT TEXT TEXT TEXT TEXT <br/>
                            TEXT TEXT TEXT TEXT TEXT <br/>    
                            TEXT TEXT TEXT TEXT TEXT <br/>                                                    
                            TEXT TEXT TEXT TEXT TEXT <br/>                            
                            TEXT TEXT TEXT TEXT TEXT <br/>      
                            TEXT TEXT TEXT TEXT TEXT <br/>
                            </p>                                   
                        </div>
                </div>
            </>
            </div>
        )
    }
}
