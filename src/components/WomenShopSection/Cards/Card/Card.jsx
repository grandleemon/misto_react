import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.card1Image} alt=""/>
            </div>
            <div className="card__content">
                <div className="card__title">
                    {props.card1Title}
                </div>
                <div className="card__price">
                    {props.card1Price}
                </div>
                <div className="card__rating">

                </div>
            </div>
        </div>
    );
};

export default Card;