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
                        <MainHeader/>
                </div>




            </header>
        </div>
    );
};

export default Header;