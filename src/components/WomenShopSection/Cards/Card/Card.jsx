import React from 'react';
import './Card.css'
import favorites from './../../../../icons/Card/heart.svg'
import scales from './../../../../icons/Card/scales.svg'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.cardImage} alt=""/>
            </div>
            <div className="card__content">
                <div className="card__title">
                    {props.cardTitle}
                </div>
                <div className="card__price">
                    {props.cardPrice}
                </div>
                <div className="card__hidden-info">
                    <div className="color__picker">
                        <div>
                            <img src={props.cardImage} alt=""/>
                            <img src={props.colorVariants} alt=""/>
                            <img src={props.colorVariants} alt=""/>
                            <img src={props.colorVariants} alt=""/>
                        </div>
                    </div>

                    <div className="dimensions__picker">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                    </div>

                    <div className="card__footer">
                        <button className="cart__btn">ADD TO CART</button>

                        <div className="card__footer-btns">
                            <div>
                                <img src={favorites} alt=""/>
                            </div>
                            <div>
                                <img src={scales} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;