import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./Categories.css"

const Categories = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/men')
    }

    return (
        <div className="categories">
            <Link to="women">
            <div className="women__category col-1">
                <div className="women__category-title">women</div>
            </div>
            </Link>
            <div className="men__category col-2" onClick={handleNavigate}>
                <div className="men__category-title">
                    men
                </div>
            </div>
            <div className="accessories__category row-1">
                <div className="accessories__category-title">accessories</div>
            </div>
        </div>
    );
};

export default Categories;