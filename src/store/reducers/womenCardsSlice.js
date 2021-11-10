import card1Image from './../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg'
import card2Image from './../../images/WomenShopSection/Cards/Cluse La Boheme Rose Gold.jpg'
import card3Image from './../../images/WomenShopSection/Cards/Mercury Tee.jpg'
import card4Image from './../../images/WomenShopSection/Cards/Skin Sweatpans.jpg'
import card5Image from './../../images/WomenShopSection/Cards/Cream women pants.jpg'

const initialState = [
    {id: 1, category: "new", cardImage: card1Image, colorVariants: card1Image, cardTitle: "Women's tracksuit Q109", cardPrice:"$ 38.00"},
    {id: 2, category: "bestseller", cardImage: card2Image, colorVariants: card2Image, cardTitle: "Cluse La Boheme Rose Gold", cardPrice:"$ 38.00"},
    {id: 3, category: "special", cardImage: card3Image, colorVariants: card3Image, cardTitle: "Mercury Tee", cardPrice:"$ 38.00"},
    {id: 4, category: "mostViewed", cardImage: card4Image, colorVariants: card4Image, cardTitle: "Skin Sweatpans", cardPrice:"$ 38.00"},
    {id: 5, category: "new", cardImage: card5Image, colorVariants: card5Image, cardTitle: "Cream women pants", cardPrice:"$ 38.00"}
]

export default function womenCardsReducer(state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}