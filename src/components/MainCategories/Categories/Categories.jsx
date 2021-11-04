import React from 'react';
import "./Categories.css"
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <Link to="women">
            <div className="women__category">
                <div className="women__category-title">women</div>
            </div>
            </Link>
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