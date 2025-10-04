import React from "react";
import PricingHeader from "./PricingHeader";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../components/common/Footer";
import PricingCard from "./PricingCard";
import MainMenu from "../components/common/MainMenu";
import FAQ from "./FAQ";

const PricingPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <PricingHeader/>
                <div className="container pb-4">
                    <PricingCard/>
                    <WhyChooseUs/>
                    <FAQ/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PricingPage;

