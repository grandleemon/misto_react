import React from 'react';
import styles from './Button.module.css'

const Button = ({handleClick}) => {
    return (
        <div>
            <button className={styles.myBtn} onClick={handleClick}>SEE ALL</button>
        </div>
    );
};

export default Button;