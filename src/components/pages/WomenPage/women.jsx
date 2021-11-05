import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import './women.css'
import card1Image from './../../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg'
import card2Image from './../../../images/WomenShopSection/Cards/Cluse La Boheme Rose Gold.jpg'
import card3Image from './../../../images/WomenShopSection/Cards/Mercury Tee.jpg'
import card4Image from './../../../images/WomenShopSection/Cards/Skin Sweatpans.jpg'
import card5Image from './../../../images/WomenShopSection/Cards/Cream women pants.jpg'

const Women = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="women__page-cards">
                    <Card cardImage={card1Image} colorVariants={card4Image} cardTitle={"Women's tracksuit Q109"} cardPrice={"$ 38.00"} />
                    <Card cardImage={card2Image} colorVariants={card4Image} cardTitle={"Cluse La Boheme Rose Gold"} cardPrice={"$ 30.00"}/>
                    <Card cardImage={card3Image} colorVariants={card4Image} cardTitle={"Mercury Tee"} cardPrice={"$ 54.00"}/>
                    <Card cardImage={card4Image} colorVariants={card4Image} cardTitle={"Skin Sweatpans"} cardPrice={"$ 21.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                    <Card cardImage={card5Image} colorVariants={card4Image} cardTitle={"Cream women pants"} cardPrice={"$ 45.00"}/>
                </div>
            </div>

        </div>
    );
};

export default Women;