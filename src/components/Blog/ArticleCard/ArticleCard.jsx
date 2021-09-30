import React from 'react';
import './Article.css'
const ArticleCard = (props) => {
    return (
        <div className="article__card">
            <div className="article__image">
                <img src={props.cardImage} alt=""/>
            </div>
            <div className="article__preview">
                <div className="article__title">
                    {props.articleTitle}
                </div>
                <div className="article__body">
                    {props.articleDescription}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;