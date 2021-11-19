import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import Button from "../../button/Button";
import {useSelector} from "react-redux";
import {getMenItems, getSelectedCategory} from "../../../app/features/menCategory/menCategorySlice";


const MenShopCards = () => {
    const menCards = useSelector(getMenItems)
    const selectedCategory = useSelector(getSelectedCategory)
    const renderedItems = menCards
        .filter(card => {
            if(selectedCategory === "all") return true;
            return selectedCategory === card.sortCategory
        })
        .map(card => {
            return <Card card={card} />
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