import React from 'react';
import Data from "./Data/Data";
import SocialsLinks from "./SocialsLinks/SocialsLinks";

const TopHeader = () => {
    return (
            <div className="top__header">
                <Data/>
                <SocialsLinks/>
            </div>
    );
};

export default TopHeader;