import React from 'react';
import './Feedback.css'
import facebook_icon from "../../assets/icons/Header/TopHeader/SocialLinks/facebook.svg";
import twitter_icon from "../../assets/icons/Header/TopHeader/SocialLinks/twitter.svg";
import pinterest_icon from "../../assets/icons/Header/TopHeader/SocialLinks/pinterest.svg";
import instagram_icon from "../../assets/icons/Header/TopHeader/SocialLinks/instagram.svg";

const Feedback = () => {
    return (
        <div className="feedback__background">
            <div className="wrapper">
                <div className="feedback">
                    <div className="feedback__subtitle">
                        BE IN TOUCH WITH US:
                    </div>
                    <div className="feedback__form">
                        <input type="email" placeholder="Enter your email"/>
                        <button>
                            join us
                        </button>
                    </div>

                    <div className="feedback__socials">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={facebook_icon} alt="facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={twitter_icon} alt="twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={pinterest_icon} alt="pinterest"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={instagram_icon} alt="instagram"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;