import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addItemToCart} from "../../../../features/cart/cartSlice";
import {setCurrentProduct} from "../../../../features/products/productsSlice";
import favorites from './../../../../icons/Card/heart.svg'
import scales from './../../../../icons/Card/scales.svg'
import './Card.css'


const Card = ({card}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setCurrentProduct(card))
        navigate(`/products/${card.cardTitle}`)
    }
    const [size, setSize] = useState("s")
    const changeSize = (size) => {
        setSize(size)
    }
    return (
        <div className="card" >
            <div className="card__image" onClick={handleClick}>
                <img src={card.cardImage} alt=""/>
            </div>
            <div className="card__content">
                <div className="card__title">
                    {card.cardTitle}
                </div>
                <div className="card__price">
                    {("$ ") +  card.cardPrice.toFixed(2)}
                </div>
                <div className="card__hidden-info">
                    <div className="color__picker">
                        <div>
                            <img src={card.cardImage} alt=""/>
                            <img src={card.colorVariants} alt=""/>
                            <img src={card.colorVariants} alt=""/>
                            <img src={card.colorVariants} alt=""/>
                        </div>
                    </div>

                    <div className="size__picker">
                        {["xs", "s", "m", "l"]
                            .map(value => <div
                                className={value === size ? "buttonActive" : ""}
                                onClick={() => {changeSize(value)}}>{value}</div>)}
                    </div>

                    <div className="card__footer">
                        <button onClick={() => {dispatch(addItemToCart({card, size}))}}
                                className="cart__btn">ADD TO CART</button>

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

export default Card