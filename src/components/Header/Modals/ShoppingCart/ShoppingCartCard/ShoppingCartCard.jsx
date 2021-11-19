import React, {useState} from 'react';
import './ShoppingCartCard.css'
import deleteIcon from '../../../../../assets/icons/Header/MainHeader/ShopppingCartCard/delete-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {
    addToCardPrice,
    addToTotalPrice,
    getTotalPrice,
    removeFromTotalPrice,
    removeItemFromCart
} from "../../../../../app/features/cart/cartSlice";




const ShoppingCartCard = ({card}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const price = () => {
        if(quantity === 1){
            return "$ " + card.price.toFixed(2)
        } else {
            return "$ " + (card.price * quantity).toFixed(2)
        }
    }
    const inc = () => {
        setQuantity(quantity + 1)
        dispatch(addToTotalPrice(card.price))
    }
    const dec = () => {
        if(quantity <= 1) return;
        setQuantity(quantity - 1)
        dispatch(removeFromTotalPrice(card.price))
    }



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
                            <div className="amount">{quantity}</div>
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