import React from 'react';
import MenShopCards from "./MenShopCards/MenShopCards";
import FilterMenCategory from "./Filter/filterMenCategory";
import styles from "../WomenShopSection/WomenShopSection.module.css";
import "./MenShopCategories.css"

const MenShopCategories = () => {
    return (
        <div className="men__section">
            <div className="wrapper">
                <div className={styles.category__header}>
                    <div className={styles.category__title}>
                        MEN'S
                    </div>
                    <div className={styles.sorting__categories}>
                        {["new arrivals", "specials", "bestsellers", "most viewed", "all"]
                            .map(category => <FilterMenCategory category={category} />)}
                    </div>
                </div>
                <MenShopCards />
            </div>
        </div>
    );
};

export default MenShopCategories;