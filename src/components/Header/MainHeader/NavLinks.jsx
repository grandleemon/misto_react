import React from 'react';
import {Link} from "react-router-dom";

const NavLinks = ({womenHovered, menHovered, onMouseEnterWomen, onMouseEnterMen, onMouseLeaveWomen, onMouseLeaveMen}) => {
    return (
        <div>
            <ul>
                <li>
                    <a onMouseEnter={onMouseLeaveWomen}
                       href="#">About Us</a>
                </li>
                <li>
                    <Link onMouseEnter={onMouseEnterWomen}
                          onMouseLeave={onMouseLeaveWomen}
                          style={womenHovered ? {backgroundColor: "#121212", color: "white"} : {}}
                          to="/women"
                          onClick={onMouseLeaveWomen}>Women</Link>
                </li>
                <li>
                    <Link onMouseEnter={onMouseEnterMen}
                          onMouseLeave={onMouseLeaveMen}
                          onClick={onMouseLeaveMen}
                          href="#"
                          to="/men"
                          style={menHovered ? {
                              backgroundColor: "#121212",
                              color: "white"
                          } : {}}>Men</Link>
                </li>
                <li>
                    <a href="#">Beauty</a>
                </li>
                <li>
                    <a href="#">Accessories</a>
                </li>
                <li>
                    <a onMouseEnter={onMouseLeaveWomen} href="#">Blog</a>
                </li>
                <li>
                    <a onMouseEnter={onMouseLeaveWomen} href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;