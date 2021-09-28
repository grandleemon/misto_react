import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import card1Image from "../../../images/MenShopCategories/Cards/Striped Sweatshirt.jpg";
import card2Image from "../../../images/MenShopCategories/Cards/Men pants.jpg";
import card3Image from "../../../images/MenShopCategories/Cards/Men Knit Sweater.jpg";
import card4Image from "../../../images/MenShopCategories/Cards/Dusk Pom Beanie.jpg";
import card5Image from "../../../images/MenShopCategories/Cards/Leather White Trainers.jpg";
import Button from "../../../UI/button/Button";

const MenShopCards = () => {
    return (
        <div>
            <div className="shopping__cards">
                <Card card1Image={card1Image} card1Title={"Striped Sweatshirt"} card1Price={"$ 38.00"}/>
                <Card card1Image={card2Image} card1Title={"Men pants"} card1Price={"$ 30.00"}/>
                <Card card1Image={card3Image} card1Title={"Men Knit Sweater"} card1Price={"$ 54.00"}/>
                <Card card1Image={card4Image} card1Title={"Dusk Pom Beanie"} card1Price={"$ 180.00"}/>
                <Card card1Image={card5Image} card1Title={"Leather White Trainers"} card1Price={"$ 45.00"}/>
            </div>
            <Button />
        </div>
    );
};

export default MenShopCards;