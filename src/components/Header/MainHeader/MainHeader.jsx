import React, {useState} from 'react';
import {Link} from "react-router-dom";
import search_icon from '../../../assets/icons/Header/MainHeader/search.svg'
import localization_icon from '../../../assets/icons/Header/MainHeader/globe.svg'
import user_icon from '../../../assets/icons/Header/MainHeader/user.svg'
import cart_icon from '../../../assets/icons/Header/MainHeader/cart.svg'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuMen from "../DropdownMenu/DropdownMenuCategories/MenuMen";
import Localization from "../Modals/Localization/Localization";
import SearchModal from "../Modals/Search/SearchModal";
import LoginModal from "../Modals/Login/LoginModal";
import ShoppingCart from "../Modals/ShoppingCart/ShoppingCart";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import './MainHeader.css'


class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            womenHovered: false,
            menHovered: false,
            showModalLocalization: false,
            showModalSearch: false,
            showLoginModal: false,
            showShoppingCartModal: false
        }
    }

    onMouseEnterWomen = e => {
        this.setState({womenHovered: true})
    }

    onMouseEnterMen = e => {
        this.setState({menHovered: true})
    }

    onMouseLeaveWomen = e => {
        this.setState({womenHovered: false})
    }

    onMouseLeaveMen = e => {
        this.setState({menHovered: false})
    }

    closeModalLocalization = () => {
        this.setState({showModalLocalization: false})
    }

    closeModalSearch = () => {
        this.setState({showModalSearch: false})
    }

    closeLoginModal = () => {
        this.setState({showLoginModal: false})
    }

    closeShoppingCartModal = () => {
        this.setState({showShoppingCartModal: false})
    }

    setShowModalLocalization = () => {
        this.setState(prev => ({showModalLocalization: !prev.showModalLocalization}))
    }
    setShowModalSearch = () => {
        this.setState(prev => ({showModalSearch: !prev.showModalSearch}))
    }
    setShowLoginModal = () => {
        this.setState(prev => ({showLoginModal: !prev.showLoginModal}))
    }
    setShoppingCartModal = () => {
        this.setState(prev => ({showShoppingCartModal: !prev.showShoppingCartModal}))
    }


    render() {
        const {womenHovered} = this.state;
        const {menHovered} = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="main__header">
                        <MobileNavigation />
                        <div className="logo__name">
                            <Link to="/">MiSto</Link>
                        </div>
                        <div className="menu__list">
                                <Navigation womenHovered={womenHovered}
                                          menHovered={menHovered}
                                          onMouseEnterWomen={this.onMouseEnterWomen}
                                          onMouseEnterMen={this.onMouseEnterMen}
                                          onMouseLeaveWomen={this.onMouseLeaveWomen}
                                          onMouseLeaveMen={this.onMouseLeaveMen}/>
                        </div>
                        <div className="header__buttons">
                            <div>
                                <a href="#" onClick={this.setShowModalSearch}>
                                    <img src={search_icon} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a href="#" onClick={this.setShowModalLocalization}>
                                    <img src={localization_icon} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a href="#" onClick={this.setShowLoginModal}>
                                    <img src={user_icon} alt=""/>
                                </a>
                            </div>
                            <div>
                                <div className="main__header-link" onClick={this.setShoppingCartModal}>
                                    <img src={cart_icon} alt=""/>
                                    {this.props.cartItems.length ? <div className="total__products">
                                        {this.props.cartItems.length}
                                    </div> : null}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Localization showModal={this.state.showModalLocalization}
                              setShowModal={this.setShowModalLocalization}
                              closeModal={this.closeModalLocalization}/>

                <SearchModal showModal={this.state.showModalSearch}
                             setShowModal={this.setShowModalSearch}
                             closeModal={this.closeModalSearch}/>

                <LoginModal showModal={this.state.showLoginModal}
                            setShowModal={this.setShowLoginModal}
                            closeModal={this.closeLoginModal}/>

                <ShoppingCart showModal={this.state.showShoppingCartModal}
                              setShowModal={this.setShoppingCartModal}
                              closeModal={this.closeShoppingCartModal}/>

                <div className="dropdown__menu"
                     style={womenHovered ? {display: "block"} : {display: "none"}} onMouseLeave={this.onMouseLeaveWomen}
                     onMouseEnter={this.onMouseEnterWomen}>
                    <div className="wrapper">
                        <DropdownMenu/>
                    </div>
                </div>

                <div className="dropdown__menu"
                     style={menHovered ? {display: "block"} : {display: "none"}} onMouseLeave={this.onMouseLeaveMen}
                     onMouseEnter={this.onMouseEnterMen}>
                    <div className="wrapper">
                        <MenuMen/>
                    </div>
                </div>

            </div>
        );
    }


};

export default MainHeader;