import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Women from "./components/pages/WomenPage/women";
import HomePage from "./components/pages/homePage";



function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="women" element={<Women />} />
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
