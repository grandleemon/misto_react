import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Women from "./components/pages/WomenPage/women";
import HomePage from "./components/pages/homePage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import './App.css'
import MenPage from "./components/pages/MenPage/MenPage";
import {Navigate} from "react-router";



function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/misto_react/" element={<Navigate to="/" />} />
                <Route path="women" element={<Women />} />
                <Route path="men" element={<MenPage />} />
                <Route path="products/:title" element={<ProductPage />}/>
                <Route path="order" element={<OrderPage />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
