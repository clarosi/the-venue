import React from 'react';
import Carousel from './Slider';
import Timer from './Timer';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <Timer />
        </div>
    );
};

export default Featured;