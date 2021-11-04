import React from 'react';
import './Slider.css'
const Slider = () => {
    return (
                <div className="bestsellers slider">
                    <div className="arrow arrow-left">&#60;</div>
                    <div className="slider__item-content">
                        <div className="slider__item-type">BANNER</div>
                        <div className="slider__item-title">your Title text</div>
                    </div>
                    <div className="arrow arrow-right">&#62;</div>
                </div>
    );
};

export default Slider;