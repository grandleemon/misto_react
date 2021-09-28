import React from 'react';
import './MainHeader.css'
import search_icon from './../../../icons/Header/MainHeader/search.svg'
import localization_icon from './../../../icons/Header/MainHeader/globe.svg'
import user_icon from './../../../icons/Header/MainHeader/user.svg'
import cart_icon from './../../../icons/Header/MainHeader/cart.svg'

const MainHeader = () => {
    return (
        <div>
            <div className="main__header">
                <div className="logo__name">
                    <a href="#">MiSto</a>
                </div>
                <div className="menu__list">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Beauty</a>
                            </li>
                            <li>
                                <a href="#">Accessories</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__buttons">
                    <div>
                        <a href="#">
                            <img src={search_icon} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={localization_icon} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={user_icon} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={cart_icon} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;