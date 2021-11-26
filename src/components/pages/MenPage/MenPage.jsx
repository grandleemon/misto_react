import React from 'react';
import {useSelector} from "react-redux";
import {getMenItems} from "../../../app/features/menCategory/menCategorySlice";
import Card from "../../WomenShopSection/Cards/Card/Card";
import Feedback from "../../Feedback/Feedback";
import './MenPage.css'

const MenPage = () => {
    const menCards = useSelector(getMenItems)
    return (
        <div className="men__page">
            <div className="men__page-title">men</div>
            <div className="wrapper">
                <div className="men__cards shopping__cards">
                    {menCards.map(
                        card => {return <Card card={card}/>}
                    )}
                </div>
            </div>
            <Feedback />
        </div>
    );
};

export default MenPage;