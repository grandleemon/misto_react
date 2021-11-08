import React, {useState} from 'react';
import './ShoppingCartCard.css'
import deleteIcon from './../../../../../icons/Header/MainHeader/ShopppingCartCard/delete-icon.svg'
import {useDispatch, useSelector} from "react-redux";




const ShoppingCartCard = (props) => {
    const [count, setCount] = useState(1)
    const id = useSelector((state => state.shoppingCart.id))
    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count - 1)
    }
    let price = () => {
        if(count === 1){
            return props.cardPrice
        } else {
            return props.cardPrice * count
        }
    }

    const dispatch = useDispatch()

    const deleteCard = (id) => {
        dispatch({type:'cart/remove', payload: id})
    }
    return (
        <div className="shopping__cart-card-line">
            <div className="shopping__cart-card">
                <div className="shopping__cart-card-img">
                    <img src={props.image} alt=""/>
                </div>

                <div className="shopping__cart-card-body">
                    <div className="shopping__cart-card-title">
                        {props.title}
                    </div>
                    <div className="shopping__cart-card-size-color">
                        {props.color + ", " + props.size}
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

                        <div className="shopping__cart-card-delete" onClick={ () => deleteCard(1)}>
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