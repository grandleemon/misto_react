import React from 'react';
import styles from "./News.module.css"

const News = () => {
    return (
        <div className="wrapper">
            <div className={styles.news}>
                <div className={styles.news__item}>
                    <div className={styles.new__season}>
                    <div className={styles.content}>
                        <div className={styles.content__type}>
                            new season
                        </div>
                        <div className={styles.content__title}>
                            lookbook collection
                        </div>
                    </div>
                </div>
                </div>
                <div className={styles.news__item}>
                    <div className={styles.sale}>
                        <div className={styles.content}>
                            <div className={styles.content__type}>
                                sale
                            </div>
                            <div className={styles.content__title}>
                                Get UP to <span>50% off</span>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default News;