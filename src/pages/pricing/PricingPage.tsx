import React from "react";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const PricingPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <Navbar/>
                <div className="container py-5">
                    <PricingHeader/>
                    <PricingCard />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PricingPage;
