import React, {useEffect, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./Register.css"

const useInput = ( initialValue, validations ) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    useEffect( () => {
        debugger
        for(const validation in validations){
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
            }
        }
    }, [value])

    useEffect( () => {
            if(isEmpty || maxLengthError || minLengthError || emailError){
                setInputValid(false)
            } else {
                setInputValid(true)
            }
    }, [isEmpty, maxLengthError, minLengthError, emailError])
    return {
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        inputValid
    }
}

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
                {(email.isDirty && email.isEmpty || email.emailError) && <div className="registration__error">Please enter a valid e-mail address</div>}
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