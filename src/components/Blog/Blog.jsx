import React from 'react';
import styles from './Blog.module.css'
import articleImage1 from './../../images/Blog/article-break.jpg'
import articleImage2 from './../../images/Blog/article-wedding.jpg'
import articleImage3 from './../../images/Blog/article-favorites.jpg'
import ArticleCard from "./ArticleCard/ArticleCard";


const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className="wrapper">
                <div className={styles.blog__header}>
                    <div className={styles.title}>
                        LATEST FROM BLOG
                    </div>

                    <div className={styles.link}>
                        <a href="#">see all</a>
                    </div>
                </div>
                <div className={styles.blog__articles}>
                    <ArticleCard cardImage={articleImage1} articleTitle={"The Easiest Way to Break"} articleDescription={"But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"}/>
                    <ArticleCard cardImage={articleImage2} articleTitle={"Wedding Season"} articleDescription={"But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"}/>
                    <ArticleCard cardImage={articleImage3} articleTitle={"Recent Favorites On Repeat"} articleDescription={"But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"}/>
                    <ArticleCard cardImage={articleImage1} articleTitle={"The Easiest Way to Break"} articleDescription={"But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"}/>
                </div>
            </div>
        </div>
    );
};

export default Blog;