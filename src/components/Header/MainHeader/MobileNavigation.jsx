import React, {useState} from 'react';
import NavLinks from "./NavLinks";
import {HiMenuAlt1} from "react-icons/hi"
import "./MobileNavigation.css"

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="mobile__navigation">
            <HiMenuAlt1 className="burger" size="20px" color="black" onClick={() => {
                setOpen(!open)
            }}/>
            {open && <div className="mobile__menu">
                <NavLinks/>
            </div>}
        </nav>

    );
};

export default MobileNavigation;