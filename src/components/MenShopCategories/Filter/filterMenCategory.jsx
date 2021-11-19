import React from 'react';
import './filterMenCategory.css'
import {useDispatch, useSelector} from "react-redux";
import {filterCategory, getSelectedCategory} from "../../../app/features/menCategory/menCategorySlice";

const FilterMenCategory = ({category}) => {
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

export default FilterMenCategory;