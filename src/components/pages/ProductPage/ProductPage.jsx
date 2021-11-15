import React, {useState} from 'react';
import './ProductPage.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProduct} from "../../../features/products/productsSlice";
import Feedback from "../../Feedback/Feedback";
import {addItemToCart} from "../../../features/cart/cartSlice";

const ProductPage = () => {
    const dispatch = useDispatch()
    const card = useSelector(getCurrentProduct)
    const [size, setSize] = useState("s")
    const changeSize = (size) => {
        setSize(size)
    }
    return (
        <div className="product__page">
            <div className="product__page-header">
                <div>{card.cardTitle}</div>
            </div>
            <div className="wrapper">
                <div className="product__page-body">
                    <div className="product__image">
                        <img src={card.cardImage} alt=""/>
                    </div>
                    <div className="product__information">
                        <div className="color__variations">
                            <img src={card.colorVariants} alt=""/>
                        </div>
                        <div className="size__variations">
                            <span className="size__title">Size:</span> <span className="size__value">{size}</span>
                            <div className="size__btns">
                                {["xs", "s", "m", "l"]
                                    .map(value => <button
                                        className={value === size ? "buttonActive" : ""}
                                        onClick={() => {changeSize(value)}}>{value}</button>)}
                            </div>
                        </div>
                            <hr/>
                            <div className="product__buy">
                                <div className="product__price">
                                    $ {card.cardPrice.toFixed(2)}
                                </div>
                                <div className="product__buy-btn">
                                    <button onClick={ () => {dispatch(addItemToCart({card, size}))}}>add to cart</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Feedback/>
        </div>
    );
};

export default ProductPage;