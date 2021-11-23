import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import TopHeader from "./TopHeader/TopHeader";
import './Header.css'
import {useSelector} from "react-redux";
import {getCartItems} from "../../app/features/cart/cartSlice";


const Header = () => {
    const cartItems = useSelector(getCartItems)
    return (
        <div>
            <header>
                <div className="background">
                    <div className="wrapper">
                        <TopHeader />
                    </div>
                </div>
                <div className="main__header-background">
                        <MainHeader cartItems={cartItems}/>
                </div>
            </header>
        </div>
    );
};

export default Header;