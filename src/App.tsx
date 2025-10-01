import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import HomePage from "./pages/home/HomePage";
import PricingPage from "./pages/pricing/PricingPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturesPage";
import DemoPage from "./pages/demo/DemoPage";
import EnrollPage from "./pages/demo/enroll/EnrollPage";
import VerifyPage from "./pages/demo/verify/VerifyPage";

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
                    <Route path="/demo/enroll" element={<EnrollPage/>}/>
                    <Route path="/demo/verify" element={<VerifyPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
