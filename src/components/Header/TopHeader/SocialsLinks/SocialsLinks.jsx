import React from 'react';
import facebook_icon from "../../../../icons/Header/TopHeader/SocialLinks/facebook.svg";
import twitter_icon from "../../../../icons/Header/TopHeader/SocialLinks/twitter.svg";
import pinterest_icon from "../../../../icons/Header/TopHeader/SocialLinks/pinterest.svg";
import instagram_icon from "../../../../icons/Header/TopHeader/SocialLinks/instagram.svg";
import './SocialsLinks.css'

const SocialsLinks = () => {
    return (
        <div>
            <div className="socials__links">
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
    );
};

export default SocialsLinks;