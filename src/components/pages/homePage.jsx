import React from 'react';
import MainCategories from "../MainCategories/MainCategories";
import WomenShopSection from "../WomenShopSection/WomenShopSection";
import MenShopCategories from "../MenShopCategories/MenShopCategories";
import News from "../NewsSection/News";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Blog from "../Blog/Blog";
import Feedback from "../Feedback/Feedback";

const HomePage = () => {
    return (
        <div>
            <MainCategories />
            <WomenShopSection />
            <MenShopCategories />
            <News />
            <SpecialOffers />
            <Blog />
            <Feedback />
        </div>
    );
};

export default HomePage;