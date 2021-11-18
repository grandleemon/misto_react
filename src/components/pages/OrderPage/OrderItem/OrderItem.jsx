import React from 'react';
import './OrderItem.css'
import {useDispatch} from "react-redux";

const OrderItem = ({card}) => {
    const dispatch = useDispatch()
    return (
        <div className="order__item">
            <div className="order__item-image">
                <img src={card.image} alt=""/>
            </div>
            <div className="order__item-body">
                <div className="order__item-title">
                    <span>{card.title}</span>
                </div>
                <div className="order__item-size">
                    Size: <span>{card.size}</span>
                </div>
                <div className="order__item-quantity">
                    Quantity: <span>{card.quantity}</span>
                </div>
                <div className="order__item-price">
                    $ {card.price}
                </div>
            </div>
        </div>
    );
};

export default OrderItem;