import React from 'react';
import './Filter.css'
import {useDispatch, useSelector} from "react-redux";
import {filterCategory, getSelectedCategory} from "../../../features/womenCategory/womenCategorySlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return (
            <span onClick={ () => {
                dispatch(filterCategory(category))
            }}
                  className={selectedCategory === category ? "filterButton filterButtonActive" : "filterButton" }>
                {category}
            </span>
    );
};

export default Filter;