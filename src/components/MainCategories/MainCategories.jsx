import React from 'react';
import './MainCategories.css'
import Categories from "./Categories/Categories";
const MainCategories = () => {
    return (
        <div className="wrapper">
            <div className="main__categories">
                <div className="slider">
                    <div className="arrow arrow-left">&#60;</div>
                    <div className="slider__item-content">
                        <div className="slider__item-type">BANNER</div>
                        <div className="slider__item-title">your Title text </div>
                    </div>
                    <div className="arrow arrow-right">&#62;</div>
                </div>
                <Categories />
            </div>
            <div className="advantages">

            </div>
        </div>
    );
};

export default MainCategories;