import React, {useState} from 'react';
import {SliderData} from "./SliderData";
import './Slider.css'

const Slider = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    if(!Array.isArray(SliderData) || length <= 0){
        return null;
    }

    return (
                <div className="bestsellers">
                    <div className="slider">
                        {SliderData.map( (slide, index) => {
                            return (
                                <div className={index === current ? "slide active" : "slide"} key={index}>
                                    { index === current && ( <img src={slide.image} alt="" /> ) }

                                </div>
                            )
                        } )}
                    </div>
                    <div className="arrow arrow-left" onClick={prevSlide}>&#60;</div>
                    <div className="slider__item-content">
                        <div className="slider__item-type">BANNER</div>
                        <div className="slider__item-title">your Title text</div>
                    </div>

                    <div className="arrow arrow-right" onClick={nextSlide}>&#62;</div>
                </div>
    );
};

export default Slider;