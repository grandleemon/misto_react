import React from 'react';
import "./Categories.css"

const Categories = () => {
    return (
        <div className="categories">
            <div className="women__category">
                <div className="women__category-title">women</div>
            </div>
            <div className="men__category">
                <div className="men__category-title">
                    men
                </div>
            </div>
            <div className="accessories__category">
                <div className="accessories__category-title">accessories</div>
            </div>
        </div>
    );
};

export default Categories;