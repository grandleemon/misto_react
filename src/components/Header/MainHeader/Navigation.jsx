import React from 'react';
import NavLinks from "./NavLinks";

const Navigation = ({womenHovered, menHovered, onMouseEnterWomen, onMouseEnterMen, onMouseLeaveWomen, onMouseLeaveMen}) => {
    return (
        <nav className="navigation">
            <NavLinks womenHovered={womenHovered}
                      menHovered={menHovered}
                      onMouseEnterWomen={onMouseEnterWomen}
                      onMouseEnterMen={onMouseEnterMen}
                      onMouseLeaveWomen={onMouseLeaveWomen}
                      onMouseLeaveMen={onMouseLeaveMen} />
        </nav>
    );
};

export default Navigation;