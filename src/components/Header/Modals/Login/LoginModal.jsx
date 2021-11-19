import React from 'react';
import './LoginModal.css'
import {useClickOutside} from "../../../UI/hooks/useClickOutside";
import facebookIcon from "../../../../assets/icons/Header/MainHeader/LoginModal/facebook-icon.svg"
import googleIcon from "../../../../assets/icons/Header/MainHeader/LoginModal/google-icon.png"


const LoginModal = (props) => {

    let domNode = useClickOutside(() => {
        props.closeModal()
    })

    return (
        <div>
            {props.showModal ? <div className="login" ref={domNode}>
                <div className="login__header">
                    <div className="login__title">Login</div>
                    <div className="login__close-btn" onClick={props.setShowModal}>
                    </div>
                </div>

                <div className="login__body">

                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"/>
                        </div>


                        <div className="login-password">
                            <div>
                                <label htmlFor="password">Password</label>
                                <a href="#">Lost your password?</a>
                            </div>
                            <input type="password" id="password" name="password" placeholder="Your password"/>
                        </div>

                        <input type="submit" value="login"/>
                    </form>

                    <div className="lines">
                        <hr/>
                        <span> or </span>
                        <hr/>
                    </div>

                    <div className="login-services">
                        <div className="facebook-login">
                            <a href="#">
                                <img src={facebookIcon} alt="facebook-login"/>
                            </a>
                        </div>

                        <div className="google-login">
                            <a href="#">
                                <img src={googleIcon} alt="google-login"/>
                            </a>
                        </div>
                    </div>

                    <div className="new-user">
                        <div>New Customer?</div>
                        <a href="#">create your account</a>
                    </div>
                </div>
            </div> : null}

        </div>
    );
};

export default LoginModal;