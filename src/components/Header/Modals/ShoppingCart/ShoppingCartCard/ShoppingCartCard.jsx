import React from 'react';
import './ShoppingCartCard.css'
import tracksuit from "./../../../../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg"
import deleteIcon from './../../../../../icons/Header/MainHeader/ShopppingCartCard/delete-icon.svg'

const ShoppingCartCard = (props) => {
    return (
        <div className="shopping__cart-card-line">
            <div className="shopping__cart-card">
                <div className="shopping__cart-card-img">
                    <img src={tracksuit} alt=""/>
                </div>

                <div className="shopping__cart-card-body">
                    <div className="shopping__cart-card-title">
                        Women's tracksuit Q109
                    </div>
                    <div className="shopping__cart-card-size-color">
                        Blue, S
                    </div>
                    <div className="shopping__cart-card-footer">
                        <div className="shopping__cart-card-amount">
                            <div className="remove">-</div>
                            <div className="amount">1</div>
                            <div className="add">
                                <div>+</div>
                            </div>
                        </div>

                        <div className="shopping__cart-card-price">
                            $379.99
                        </div>

                        <div className="shopping__cart-card-delete">
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