import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import {useSelector} from "react-redux";
import {getWomenPageItems} from "../../../app/features/womenPage/womenPageSlice";
import Feedback from "../../Feedback/Feedback";
import './women.css'

const Women = () => {
    const womenPageItems = useSelector(getWomenPageItems)
    const renderedItems = womenPageItems.map(
        card => {return <Card card={card}/>}
    )
    return (
        <div>
            <div className="wrapper">
                <div className="women__page-cards">
                    {renderedItems}
                </div>


            </div>
            <Feedback />
        </div>
    );
};

export default Women;