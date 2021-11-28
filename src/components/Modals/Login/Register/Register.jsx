import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useInput} from "../../../UI/hooks/useInput";
import "./Register.css"



const Register = ({setIsRegistrationOpen}) => {

    const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true});
    const password = useInput("", {isEmpty: true, minLength: 5, maxLength: 15});

    return (

        <div className="registration__body">
            <form action="">
                <div className="registration__header">
                    <h2>Registration</h2>
                    <div className="registration__close-btn" onClick={ () => {
                        setIsRegistrationOpen(false)
                    }}>
                        <CloseIcon />
                    </div>
                </div>

                <input onChange={e => email.onChange(e)}
                       onBlur={e => email.onBlur(e)}
                       value={email.value}
                       type="email"
                       placeholder="Enter your email"
                       style={ (email.isDirty && email.isEmpty || email.emailError) ? {borderBottom: "1px solid red"} : {borderBottom: "1px solid green"} }/>
                {(email.isDirty && email.isEmpty || (email.emailError && email.isDirty)) && <div className="registration__error">Please enter a valid e-mail address</div>}
                <input onChange={e => password.onChange(e)}
                       onBlur={e => password.onBlur(e)}
                       value={password.value}
                       type="password"
                       placeholder="Enter your password"
                       style={ (password.isDirty && password.isEmpty || password.minLengthError) ? {borderBottom: "1px solid red"} : {borderBottom: "1px solid green"} }/>
                {(password.isDirty && password.isEmpty) && <div className="registration__error">Please enter a password</div>}
                {(password.isDirty && password.minLengthError) && <div className="registration__error password-error">Password must be more than 5 characters</div>}
                <button disabled={!email.inputValid || !password.inputValid} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;