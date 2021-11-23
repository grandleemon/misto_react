import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useClickOutside} from "../../../UI/hooks/useClickOutside";
import {useNavigate} from "react-router-dom";
import ShoppingCartCard from "./ShoppingCartCard/ShoppingCartCard";
import {getCartItems, getTotalPrice} from "../../../../app/features/cart/cartSlice";
import './ShoppingCart.css'
import {calcTotalPrice} from "../../../utils/calcTotalPrice";

const ShoppingCart = (props) => {

    // let cart = useSelector((state => state.shoppingCart))
    // let renderedItems = cart.map(card => {
    //     return <ShoppingCartCard id={card.id} image={card.image} cardPrice={card.price} title={card.title} color={card.color} size={card.size}/>
    // })

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    const renderedItems = cartItems.map(card => {
        return <ShoppingCartCard card={card}/>
    })

    const domNode = useClickOutside(() => {
        props.closeModal()
    })
    const navigate = useNavigate()
    const handleClick = () => {
        props.closeModal()
        navigate('/order')
    }

    return (
        <div>
            {props.showModal ? <div className="shopping-cart" ref={domNode}>
                <div className="cart__header">
                    <div className="cart__title">Shopping Cart</div>
                    <div className="cart__close-btn" onClick={props.setShowModal}>
                    </div>
                </div>

                <div className="cart__body">
                    {cartItems.length ? <div className="shopping_cart-cards">
                        {renderedItems}

                        <div className="shopping__cart-total">
                            <div className="total-price">
                                <div className="total">Total</div>
                                <div className="price">$ {totalPrice.toFixed(2)}</div>
                            </div>

                            <button onClick={handleClick}>Check Out</button>
                        </div>
                    </div> : <div className="emptyCart">The cart is empty</div> }

                </div>
            </div> : null}

        </div>
    );
};

export default ShoppingCart;