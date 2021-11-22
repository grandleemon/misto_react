import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import TopHeader from "./TopHeader/TopHeader";
import './Header.css'


const Header = () => {
    return (
        <div>
            <header>
                <div className="background">
                    <div className="wrapper">
                        <TopHeader />
                    </div>
                </div>
                <div className="main__header-background">
                        <MainHeader/>
                </div>
            </header>
        </div>
    );
};

export default Header;