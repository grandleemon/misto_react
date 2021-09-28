import React from 'react';
import styles from "../WomenShopSection/WomenShopSection.module.css";
import "./MenShopCategories.css"
import MenShopCards from "./MenShopCards/MenShopCards";

const MenShopCategories = () => {
    return (
        <div className="men__section">
            <div className="wrapper">
                <div className={styles.category__header}>
                    <div className={styles.category__title}>
                        MEN'S
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
                <MenShopCards />
            </div>
        </div>
    );
};

export default MenShopCategories;