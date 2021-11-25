import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import {useSelector} from "react-redux";
import Feedback from "../../Feedback/Feedback";
import './women.css'

const Women = () => {
    const womenCards = useSelector((state => state.womenCategory.womenCategoryItems))

    return (
        <div className="women__page">
            <div className="women__page-title">women</div>
            <div className="wrapper">
                <div className="women__page shopping__cards">
                    {womenCards.map(
                    card => {return <Card card={card}/>}
                    )}
                </div>
            </div>
            <Feedback />
        </div>
    );
};

export default Women;