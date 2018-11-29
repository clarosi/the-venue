import React from 'react';
import Slider from "react-slick";

import slideOne from '../../resources/images/slide_one.jpg';
import slideTwo from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const arraySlides = [slideOne, slideTwo, slideThree];

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500
    };

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                {
                    arraySlides.map((slide, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className="carrousel_image"
                                    style={{
                                        background: `url(${slide})`,
                                        height: `${window.innerHeight}px`
                                    }}
                                >
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default Carousel;