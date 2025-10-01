import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/home/HomePage";
import PricingPage from "./pages/pricing/PricingPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturesPage";
import DemoPage from "./pages/demo/DemoPage";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/features" element={<FeaturesPage/>}/>
                    <Route path="/pricing" element={<PricingPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/demo" element={<DemoPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
