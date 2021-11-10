import React from 'react';
import styles from './WomenShopSection.module.css'
import Cards from "./Cards/Cards";
import Filter from "./Filter/Filter";

const WomenShopSection = () => {

    return (
        <div className={styles.women__section}>
            <div className="wrapper">
                <div className={styles.category__header}>
                    <div className={styles.category__title}>
                        WOMEN’S
                    </div>
                    <div className={styles.sorting__categories}>
                        {["new arrivals", "specials", "bestsellers", "most viewed", "all"]
                            .map(category => <Filter category={category} />)}
                    </div>
                </div>
                <Cards/>
            </div>
        </div>
    );
};

export default WomenShopSection;