import React from 'react';
import './MainCategories.css'
import Categories from "./Categories/Categories";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";

const MainCategories = () => {
    return (
        <div className="advantages__background">
            <div className="wrapper">
                <div className="main__categories">
                    <Slider/>
                    <Categories/>
                </div>
                <Advantages/>
            </div>
        </div>


    );
};

export default MainCategories;