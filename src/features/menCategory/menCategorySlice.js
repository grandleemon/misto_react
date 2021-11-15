import {createSlice} from "@reduxjs/toolkit";
import card1Image from "../../images/MenShopCategories/Cards/Striped Sweatshirt.jpg";
import card2Image from "../../images/MenShopCategories/Cards/Men pants.jpg"
import card3Image from "../../images/MenShopCategories/Cards/Men Knit Sweater.jpg";
import card4Image from "../../images/MenShopCategories/Cards/Dusk Pom Beanie.jpg";
import card5Image from "../../images/MenShopCategories/Cards/Leather White Trainers.jpg";


export const slice = createSlice({
    name: "menCategory",
    initialState: {
        menCategoryItems: [
            {id: 1, sortCategory: "new arrivals", cardImage: card1Image, colorVariants: card1Image, cardTitle: "Striped Sweatshirt", cardPrice: 38.00},
            {id: 2, sortCategory: "bestsellers", cardImage: card2Image, colorVariants: card2Image, cardTitle: "Men pants", cardPrice: 30.00},
            {id: 3, sortCategory: "specials", cardImage: card3Image, colorVariants: card3Image, cardTitle: "Men Knit Sweater", cardPrice: 54.00},
            {id: 4, sortCategory: "most viewed", cardImage: card4Image, colorVariants: card4Image, cardTitle: "Dusk Pom Beanie", cardPrice: 180.00},
            {id: 5, sortCategory: "new arrivals", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Leather White Trainers", cardPrice: 45.00},
        ],
        selectedSortMenCategory: 'all'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedSortMenCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.menCategory.selectedSortMenCategory;
export const getMenItems = state => state.menCategory.menCategoryItems
export const {filterCategory} = slice.actions

export default slice.reducer;