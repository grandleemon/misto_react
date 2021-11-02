import React from 'react';
import './ShoppingCart.css'
import {useClickOutside} from "../../../UI/useClickOutside";
import ShoppingCartCard from "./ShoppingCartCard/ShoppingCartCard";



const ShoppingCart = (props) => {

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
                    <div className="shopping_cart-cards">
                        <ShoppingCartCard />

                        <div className="shopping__cart-total">
                            <div className="total-price">
                                <div className="total">Total</div>
                                <div className="price">$379.99</div>
                            </div>

                            <button>Check Out</button>
                        </div>
                    </div>
                </div>
            </div> : null}

        </div>
    );
};

export default ShoppingCart;