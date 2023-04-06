import React, { Component } from 'react';
import places from '../../../images/house-forest.png';
import FadeInAnimation from '../../../services/FadeService/fadeService';


export default class PlacesHome extends Component {
    render() {
        return (
            <>
             <FadeInAnimation wrapperElement="div" direction="left" className="placesHome">
            <div className='placesContainer'>                     
                    <div className='places__text'>             
                        <p className='placesTop'> 
                            Places I call Home: 
                        </p>
                        <p className='placesList'>                
                            Portland, OR <br/>
                            Southern Oregon <br/>
                            Northern California <br/>
                            BC, Canada <br/>
                            Reno, NV <br/>
                            PNW Forests <br/>
                            High altitude deserts <br/>
                            Many more TBD 
                        </p>                                   
                    </div>
                    <img className='places__image'src= {places} alt="house in forest"></img>     
            </div>
            </FadeInAnimation>
            </>
        )
    }
}
