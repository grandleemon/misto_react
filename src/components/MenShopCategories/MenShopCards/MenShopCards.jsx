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
                <Card cardImage={card1Image} cardTitle={"Striped Sweatshirt"} cardPrice={"$ 38.00"}/>
                <Card cardImage={card2Image} cardTitle={"Men pants"} cardPrice={"$ 30.00"}/>
                <Card cardImage={card3Image} cardTitle={"Men Knit Sweater"} cardPrice={"$ 54.00"}/>
                <Card cardImage={card4Image} cardTitle={"Dusk Pom Beanie"} cardPrice={"$ 180.00"}/>
                <Card cardImage={card5Image} cardTitle={"Leather White Trainers"} cardPrice={"$ 45.00"}/>
            </div>
            <Button />
        </div>
    );
};

export default MenShopCards;