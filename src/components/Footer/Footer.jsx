import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__nav">
                    <div className="footer__nav-item">
                        <h2>Categories</h2>
                        <ul>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Accessories</a>
                            </li>
                            <li>
                                <a href="#">Beauty</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__nav-item">
                        <h2>Information</h2>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__nav-item">
                        <h2>Useful links</h2>
                        <ul>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Returns & Exchanges</a>
                            </li>
                            <li>
                                <a href="#">Shipping & Delivery</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__nav-item">
                        <h2>CONTACT US</h2>
                        <ul>
                            <li>
                                <a href="#">Ukraine, Kyiv, Khreshchatyk 1</a>
                            </li>
                            <li>
                                <a href="#">+38 (050) 12 34 567</a>
                            </li>
                            <li>
                                <a href="#">All week 24/7</a>
                            </li>
                            <li>
                                <a href="#">shaman.magic.music@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;