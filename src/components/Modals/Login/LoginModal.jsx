import React, {useState} from 'react';
import {useClickOutside} from "../../UI/hooks/useClickOutside";
import facebookIcon from "../../../assets/icons/Header/MainHeader/LoginModal/facebook-icon.svg"
import googleIcon from "../../../assets/icons/Header/MainHeader/LoginModal/google-icon.png"
import Register from "./Register/Register";
import {useInput} from "../../UI/hooks/useInput";
import './LoginModal.css'


const LoginModal = (props) => {
    const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true});
    const password = useInput("", {isEmpty: true, minLength: 5, maxLength: 15});
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

    let domNode = useClickOutside(() => {
        props.closeModal()
        setIsRegistrationOpen(false)
    })

    const handleClose = () => {
        props.setShowModal();
        setIsRegistrationOpen(false)
    }

    return (
        <div>
            {props.showModal ? <div className="login" ref={domNode}>
                <div className="login__header">
                    <div className="login__title">Login</div>
                    <div className="login__close-btn" onClick={handleClose}>
                    </div>
                </div>

                <div className="login__body">
                    <form>
                        <div className="login-email">
                            <label htmlFor="email">Email</label>
                            <input onChange={e => email.onChange(e)}
                                   onBlur={e => email.onBlur(e)}
                                   value={email.value}
                                   type="email"
                                   placeholder="Enter your email"
                                   style={ (email.isDirty && email.isEmpty || email.emailError) ? {borderBottom: "1px solid red"} : {borderBottom: "1px solid green"} }/>
                            {(email.isDirty && email.isEmpty || (email.emailError && email.isDirty)) && <div className="registration__error">Please enter a valid e-mail address</div>}
                        </div>
                        <div className="login-password">
                            <div>
                                <label htmlFor="password">Password</label>
                                <a href="#">Lost your password?</a>
                            </div>
                            <input onChange={e => password.onChange(e)}
                                   onBlur={e => password.onBlur(e)}
                                   value={password.value}
                                   type="password"
                                   placeholder="Enter your password"
                                   style={ (password.isDirty && password.isEmpty || password.minLengthError) ? {borderBottom: "1px solid red"} : {borderBottom: "1px solid green"} }/>
                            {(password.isDirty && password.isEmpty) && <div className="registration__error">Please enter a password</div>}
                            {(password.isDirty && password.minLengthError) && <div className="registration__error password-error">Password must be more than 5 characters</div>}
                        </div>

                        <button disabled={!email.inputValid || !password.inputValid} type="submit">login</button>
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
                        <a onClick={() => {
                            setIsRegistrationOpen(!isRegistrationOpen)
                        }} href="#">create your account</a>
                    </div>

                        <div className="registration__form"
                             style={isRegistrationOpen ? {display: "block"} : {display: "none"}}>
                            <Register isRegistrationOpen={isRegistrationOpen} setIsRegistrationOpen={setIsRegistrationOpen}/>
                        </div>

                </div>
            </div> : null}

        </div>
    );
};

export default LoginModal;