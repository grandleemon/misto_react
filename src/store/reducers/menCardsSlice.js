import card1Image from "../../images/MenShopCategories/Cards/Striped Sweatshirt.jpg";
import card2Image from "../../images/MenShopCategories/Cards/Men pants.jpg";
import card3Image from "../../images/MenShopCategories/Cards/Men Knit Sweater.jpg";
import card4Image from "../../images/MenShopCategories/Cards/Dusk Pom Beanie.jpg";
import card5Image from "../../images/MenShopCategories/Cards/Leather White Trainers.jpg";


const initialState = [
    {cardImage: card1Image, colorVariants: card1Image, cardTitle: "Striped Sweatshirt", cardPrice: "$ 38.00"},
    {cardImage: card2Image, colorVariants: card2Image, cardTitle: "Men pants", cardPrice: "$ 30.00"},
    {cardImage: card3Image, colorVariants: card3Image, cardTitle: "Men Knit Sweater", cardPrice: "$ 54.00"},
    {cardImage: card4Image, colorVariants: card4Image, cardTitle: "Dusk Pom Beanie", cardPrice: "$ 180.00"},
    {cardImage: card5Image, colorVariants: card5Image, cardTitle: "Leather White Trainers", cardPrice: "$ 45.00"},
]

export default function menCardsReducer(state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}