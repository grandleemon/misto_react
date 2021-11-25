import React from 'react';
import Card from "./Card/Card";
import Button from "../../button/Button";
import {useSelector} from "react-redux";
import {getSelectedCategory} from "../../../app/features/womenCategory/womenCategorySlice";
import './Cards.css'
import {useNavigate} from "react-router-dom";




const Cards = () => {
    const navigate = useNavigate()
    const womenCards = useSelector((state => state.womenCategory.womenCategoryItems))
    const selectedCategory = useSelector(getSelectedCategory)

    const handleClick = () => {
        navigate("/women")
    }
    return (
        <div>
            <div className="shopping__cards">
                {womenCards
                    .filter( card => {
                        if(selectedCategory === "all") return true;
                        return selectedCategory === card.sortCategory
                    })
                    .map( card => {
                        return <Card card={card} />
                    } )}
            </div>
            <Button handleClick={handleClick} />
        </div>
    );
};

export default Cards;