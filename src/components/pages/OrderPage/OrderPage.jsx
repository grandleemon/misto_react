import React from 'react';
import {useSelector} from "react-redux";
import {getCardTotal, getCartItems} from "../../../app/features/cart/cartSlice";
import OrderItem from "./OrderItem/OrderItem";
import './OrderPage.css'
import Feedback from "../../Feedback/Feedback";

const OrderPage = () => {
    const items = useSelector(getCartItems)
    const totalPrice = useSelector(getCardTotal)
    return (
        <div className="order__page">
             <div className="wrapper">
                 {items.length ?
                 <div className="order__page-body">
                     <div className="order__page-left">
                         {items.map(card => <OrderItem card={card} />)}
                     </div>
                     <div className="order__page-right">
                         <div className="order__page-totalPrice">
                        <span>
                            Total: $ {totalPrice.toFixed(2)}
                        </span>
                             <div>
                                 <button>confirm</button>
                             </div>
                         </div>
                     </div>
                 </div>
                     : <div className="emptyCart">The cart is empty</div>}
            </div>
            <Feedback />
        </div>
    );
};

export default OrderPage;