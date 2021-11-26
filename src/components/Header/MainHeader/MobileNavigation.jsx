import React, {useState} from 'react';
import NavLinks from "./NavLinks";
import {HiMenuAlt1} from "react-icons/hi"
import "./MobileNavigation.css"
import {useClickOutside} from "../../UI/hooks/useClickOutside";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    let domNode = useClickOutside(() => {
        setOpen(false)
    })
    return (
        <nav className="mobile__navigation">
            <HiMenuAlt1 className="burger" size="20px" color="black" onClick={() => {
                setOpen(!open)
            }}/>
            {open && <div className="mobile__menu" ref={domNode}>
                <NavLinks/>
            </div>}
        </nav>

    );
};

export default MobileNavigation;