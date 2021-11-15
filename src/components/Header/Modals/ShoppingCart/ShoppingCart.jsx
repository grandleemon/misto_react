import React from 'react';
import './ShoppingCart.css'
import {useClickOutside} from "../../../UI/useClickOutside";
import ShoppingCartCard from "./ShoppingCartCard/ShoppingCartCard";
import {useSelector} from "react-redux";
import {getCartItems} from "../../../../features/cart/cartSlice";

const ShoppingCart = (props) => {

    // let cart = useSelector((state => state.shoppingCart))
    // let renderedItems = cart.map(card => {
    //     return <ShoppingCartCard id={card.id} image={card.image} cardPrice={card.price} title={card.title} color={card.color} size={card.size}/>
    // })

    const cartItems = useSelector(getCartItems)
    const renderedItems = cartItems.map(card=> {
        return <ShoppingCartCard card={card} />
    })

    let domNode = useClickOutside(() => {
        props.closeModal()
    })

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
                                <div className="price">$379.99</div>
                            </div>

                            <button>Check Out</button>
                        </div>
                    </div> : <div className="emptyCart">The cart is empty</div> }

                </div>
            </div> : null}

        </div>
    );
};

export default ShoppingCart;