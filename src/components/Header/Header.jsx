import React from 'react';
import './Header.css'
import MainHeader from "./MainHeader/MainHeader";
import TopHeader from "./TopHeader/TopHeader";

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
                    <div className="wrapper">
                        <MainHeader/>
                    </div>
                </div>


            </header>
        </div>
    )
        ;
};

export default Header;