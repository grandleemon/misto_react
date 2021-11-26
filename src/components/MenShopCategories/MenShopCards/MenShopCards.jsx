import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import Button from "../../button/Button";
import {useSelector} from "react-redux";
import {getMenItems, getSelectedCategory} from "../../../app/features/menCategory/menCategorySlice";
import {useNavigate} from "react-router-dom";


const MenShopCards = () => {
    const navigate = useNavigate()
    const menCards = useSelector(getMenItems)
    const selectedCategory = useSelector(getSelectedCategory)
    const handleClick = () => {
        navigate("/men")
    }
    return (
        <div>
            <div className="shopping__cards">
                {menCards
                    .filter(card => {
                        if(selectedCategory === "all") return true;
                        return selectedCategory === card.sortCategory
                    })
                    .map(card => {
                        return <Card card={card} />
                    })}
            </div>
            <Button handleClick={handleClick}/>
        </div>
    );
};

export default MenShopCards;