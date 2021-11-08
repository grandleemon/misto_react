import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import Button from "../../../UI/button/Button";
import {useSelector} from "react-redux";


const MenShopCards = () => {
    const menCards = useSelector((state => state.menCards))
    const renderedItems = menCards.map((card) => {
        return <Card cardImage={card.cardImage} colorVariants={card.colorVariants} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />
    })
    return (
        <div>
            <div className="shopping__cards">
                {renderedItems}
            </div>
            <Button />
        </div>
    );
};

export default MenShopCards;