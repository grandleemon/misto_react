import React from 'react';
import Card from "../../WomenShopSection/Cards/Card/Card";
import './women.css'
import card1Image from './../../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg'
import card2Image from './../../../images/WomenShopSection/Cards/Cluse La Boheme Rose Gold.jpg'
import card3Image from './../../../images/WomenShopSection/Cards/Mercury Tee.jpg'
import card4Image from './../../../images/WomenShopSection/Cards/Skin Sweatpans.jpg'
import card5Image from './../../../images/WomenShopSection/Cards/Cream women pants.jpg'
import {useSelector} from "react-redux";
import {getWomenPageItems} from "../../../features/womenPage/womenPageSlice";
import Feedback from "../../Feedback/Feedback";

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