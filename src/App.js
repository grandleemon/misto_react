import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Women from "./components/pages/WomenPage/women";
import HomePage from "./components/pages/homePage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import './App.css'



function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="women" element={<Women />} />
                <Route path="products/:title" element={<ProductPage />}/>
                <Route path="order" element={<OrderPage />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
