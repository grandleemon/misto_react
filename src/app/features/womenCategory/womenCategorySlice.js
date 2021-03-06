import {createSlice} from "@reduxjs/toolkit";
import card1Image from "../../../assets/images/WomenShopSection/Cards/Women Tracksuit Q109.jpg";
import card2Image from "../../../assets/images/WomenShopSection/Cards/Cluse La Boheme Rose Gold.jpg";
import card3Image from "../../../assets/images/WomenShopSection/Cards/Mercury Tee.jpg";
import card4Image from "../../../assets/images/WomenShopSection/Cards/Skin Sweatpans.jpg";
import card5Image from "../../../assets/images/WomenShopSection/Cards/Cream women pants.jpg";


const slice = createSlice({
    name: "womenCategory",
    initialState: {
        womenCategoryItems: [
            {id: 1, sortCategory: "new arrivals", cardImage: card1Image, colorVariants: card1Image, cardTitle: "Women's tracksuit Q109", cardPrice: 38.00, quantity: 1},
            {id: 2, sortCategory: "bestsellers", cardImage: card2Image, colorVariants: card2Image, cardTitle: "Cluse La Boheme Rose Gold", cardPrice: 52.00, quantity: 1},
            {id: 3, sortCategory: "specials", cardImage: card3Image, colorVariants: card3Image, cardTitle: "Mercury Tee", cardPrice: 108.00, quantity: 1},
            {id: 4, sortCategory: "most viewed", cardImage: card4Image, colorVariants: card4Image, cardTitle: "Skin Sweatpans", cardPrice: 297.00, quantity: 1},
            {id: 5, sortCategory: "new arrivals", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Cream women pants", cardPrice: 65.00, quantity: 1},
            {id: 6, sortCategory: "most viewed", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Cream women pants", cardPrice: 65.00, quantity: 1},
            {id: 7, sortCategory: "specials", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Cream women pants", cardPrice: 65.00, quantity: 1},
            {id: 8, sortCategory: "bestsellers", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Cream women pants", cardPrice: 65.00, quantity: 1}
            ],
        selectedSortCategory: 'all'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedSortCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.womenCategory.selectedSortCategory;
export const {filterCategory} = slice.actions
export default slice.reducer;