import React from 'react';
import styles from './SpecialOffers.module.css'

const SpecialOffers = () => {
    return (
        <div className={styles.special__offersBackground}>
            <div className="wrapper">
                <div className={styles.special__offers}>
                    <div className={styles.offer}>
                        <div className={styles.offer__type}>Special Offer</div>
                        <div className={styles.offer__content}> Subscribe <br/>
                            And <span> Get 10% Off </span></div>
                        <div className={styles.subscribing__form}>
                            <input type="email" placeholder="Enter your email"/>

                            <div>
                                <button>subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;