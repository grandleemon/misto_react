import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import MainCategories from "./components/MainCategories/MainCategories";
import WomenShopSection from "./components/WomenShopSection/WomenShopSection";
import MenShopCategories from "./components/MenShopCategories/MenShopCategories";
import News from "./components/NewsSection/News";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers";
import Blog from "./components/Blog/Blog";
import Feedback from "./components/Feedback/Feedback";



function App() {
  return (
    <div className="App">
        <Header />
        <MainCategories />
        <WomenShopSection />
        <MenShopCategories />
        <News />
        <SpecialOffers />
        <Blog />
        <Feedback />
    </div>
  );
}

export default App;
