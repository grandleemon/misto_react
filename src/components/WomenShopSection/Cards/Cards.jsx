import React from 'react';
import Card from "./Card/Card";
import './Cards.css'

import Button from "../../../UI/button/Button";
import {useSelector} from "react-redux";




const Cards = () => {
    const womenCards = useSelector((state => state.womenCards))
    const renderedItems = womenCards.map( (card) => {
        return <Card cardImage={card.cardImage} colorVariants={card.colorVariants} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />
    } )
    return (
        <div>
            <div className="shopping__cards">
                {renderedItems}
            </div>
            <Button />
        </div>
    );
};

export default Cards;