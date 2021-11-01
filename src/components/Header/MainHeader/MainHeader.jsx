import React, {useState} from 'react';
import './MainHeader.css'
import search_icon from './../../../icons/Header/MainHeader/search.svg'
import localization_icon from './../../../icons/Header/MainHeader/globe.svg'
import user_icon from './../../../icons/Header/MainHeader/user.svg'
import cart_icon from './../../../icons/Header/MainHeader/cart.svg'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuMen from "../DropdownMenu/DropdownMenuCategories/MenuMen";
import Localization from "../Localization/Localization";




class MainHeader extends React.Component  {

constructor() {
    super();
    this.state = {
        womenHovered: false,
        menHovered: false,
        showModal: false
    }
}

onMouseEnterWomen = e => {
    this.setState({womenHovered:true})
}

onMouseEnterMen = e => {
    this.setState({menHovered:true})
}

onMouseLeaveWomen = e => {
    this.setState({womenHovered:false})
}

onMouseLeaveMen = e => {
    this.setState({menHovered:false})
}

closeModal = () => {
    this.setState({showModal: false})
}


setShowModal = () => {
    this.setState(prev => ({showModal: !prev.showModal}))
}


render(){
    const {womenHovered} = this.state;
    const {menHovered} = this.state;
    const styleWomen = womenHovered ? {display:"block"} : {display:"none"}
    const styleWomenLink = womenHovered ? {backgroundColor: "#121212", color:"white"} : {}
    const styleMen = menHovered ? {display:"block"} : {display:"none"}
    const styleMenLink  = menHovered ? {backgroundColor: "#121212", color:"white"} : {}
    return (
        <div>
            <div className="wrapper">
                <div className="main__header">
                    <div className="logo__name">
                        <a href="#">MiSto</a>
                    </div>
                    <div className="menu__list">
                        <nav>
                            <ul>
                                <li>
                                    <a onMouseEnter={this.onMouseLeaveWomen}
                                       href="#">About Us</a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.onMouseEnterWomen}
                                       onMouseLeave={this.onMouseLeaveWomen}
                                       href="#"
                                       style={styleWomenLink}>Women</a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.onMouseEnterMen}
                                       onMouseLeave={this.onMouseLeaveMen}
                                       href="#"
                                       style={styleMenLink}>Men</a>
                                </li>
                                <li>
                                    <a href="#">Beauty</a>
                                </li>
                                <li>
                                    <a href="#">Accessories</a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.onMouseLeaveWomen} href="#">Blog</a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.onMouseLeaveWomen} href="#">Contact</a>
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
                            <a href="#" onClick={this.setShowModal}>
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

            <Localization showModal={this.state.showModal} setShowModal={this.setShowModal} closeModal={this.closeModal}/>

            <div className="dropdown__menu" style={styleWomen} onMouseLeave={this.onMouseLeaveWomen}
            onMouseEnter={this.onMouseEnterWomen}>
                <div className="wrapper">
                    <DropdownMenu/>
                </div>
            </div>

            <div className="dropdown__menu" style={styleMen} onMouseLeave={this.onMouseLeaveMen}
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