import React from 'react';
import styles from './WomenShopSection.module.css'
import Cards from "./Cards/Cards";

const WomenShopSection = () => {
    return (
        <div className={styles.women__section}>
            <div className="wrapper">
                <div className={styles.category__header}>
                    <div className={styles.category__title}>
                        WOMEN’S
                    </div>
                    <div className={styles.sorting__categories}>
                        <ul>
                            <li className={styles.active}>NEW ARRIVALS</li>
                            <li>SPECIALS</li>
                            <li>BESTSELLERS</li>
                            <li>MOST VIEWED</li>
                            <li>FEATURED PRODUCTS</li>
                        </ul>
                    </div>
                </div>
                <Cards/>
            </div>
        </div>
    );
};

export default WomenShopSection;