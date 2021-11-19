import React from 'react';
import './OrderPage.css'
import {useSelector} from "react-redux";
import {getCartItems} from "../../../app/features/cart/cartSlice";
import OrderItem from "./OrderItem/OrderItem";
import {calcTotalPrice} from "../../utils/calcTotalPrice";

const OrderPage = () => {
    const items = useSelector(getCartItems)

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
                            Total: $ {calcTotalPrice(items)}
                        </span>
                             <div>
                                 <button>confirm</button>
                             </div>
                         </div>
                     </div>
                 </div>
                     : <div className="emptyCart">The cart is empty</div>}
            </div>
        </div>
    );
};

export default OrderPage;