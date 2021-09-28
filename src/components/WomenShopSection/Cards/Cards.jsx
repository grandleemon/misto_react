import React from 'react';
import Card from "./Card/Card";
import './Cards.css'
import card1Image from './../../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg'
import card2Image from './../../../images/WomenShopSection/Cards/Cluse La Boheme Rose Gold.jpg'
import card3Image from './../../../images/WomenShopSection/Cards/Mercury Tee.jpg'
import card4Image from './../../../images/WomenShopSection/Cards/Skin Sweatpans.jpg'
import card5Image from './../../../images/WomenShopSection/Cards/Cream women pants.jpg'
import Button from "../../../UI/button/Button";


const Cards = () => {
    return (
        <div>
            <div className="shopping__cards">
                <Card card1Image={card1Image} card1Title={"Women's tracksuit Q109"} card1Price={"$ 38.00"}/>
                <Card card1Image={card2Image} card1Title={"Cluse La Boheme Rose Gold"} card1Price={"$ 30.00"}/>
                <Card card1Image={card3Image} card1Title={"Mercury Tee"} card1Price={"$ 54.00"}/>
                <Card card1Image={card4Image} card1Title={"Skin Sweatpans"} card1Price={"$ 21.00"}/>
                <Card card1Image={card5Image} card1Title={"Cream women pants"} card1Price={"$ 45.00"}/>
            </div>
            <Button />
        </div>
    );
};

export default Cards;