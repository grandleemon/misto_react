import React from 'react';
import './Advantages.css'
const Advantages = () => {
    return (
        <div className="advantages">
            <div className="shipping">
                <div className="shipping__title">
                    FREE SHIPPING
                </div>
                <div className="shipping__content">
                    On all UA order or order above $100
                </div>
            </div>
            <div className="return">
                <div className="return__title">
                    30 DAYS RETURN
                </div>
                <div className="return__content">
                    Simply return it within 30 days for an exchange
                </div>
            </div>
            <div className="support">
                <div className="support__title">
                    30 DAYS SUPPORT 24/7
                </div>
                <div className="support__content">
                    Contact us 24 hours a day, 7 days a week
                </div>
            </div>
        </div>
    );
};

export default Advantages;