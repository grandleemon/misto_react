import React, {useState} from 'react';
import './ShoppingCartCard.css'
import deleteIcon from './../../../../../icons/Header/MainHeader/ShopppingCartCard/delete-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {removeItemFromCart} from "../../../../../features/cart/cartSlice";




const ShoppingCartCard = ({card}) => {
    const [count, setCount] = useState(1)
    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        if(count <= 1) return;
        setCount(count - 1)
    }
    let price = () => {
        if(count === 1){
            return "$ " + card.price.toFixed(2)
        } else {
            return "$ " + (card.price * count).toFixed(2)
        }
    }

    const dispatch = useDispatch()

    return (
        <div className="shopping__cart-card-line">
            <div className="shopping__cart-card">
                <div className="shopping__cart-card-img">
                    <img src={card.image} alt=""/>
                </div>

                <div className="shopping__cart-card-body">
                    <div className="shopping__cart-card-title">
                        {card.title}
                    </div>
                    <div className="shopping__cart-card-size-color">
                        {card.size}
                    </div>
                    <div className="shopping__cart-card-footer">
                        <div className="shopping__cart-card-amount">
                            <div className="remove" onClick={dec}>-</div>
                            <div className="amount">{count}</div>
                            <div className="add" onClick={inc}>
                                <div>+</div>
                            </div>
                        </div>

                        <div className="shopping__cart-card-price">
                            {price()}
                        </div>

                        <div className="shopping__cart-card-delete" onClick={ () => dispatch(removeItemFromCart({card}))}>
                            <img src={deleteIcon} alt=""/>
                        </div>

                    </div>
                </div>


            </div>
            <hr/>
        </div>
    );
};

export default ShoppingCartCard;