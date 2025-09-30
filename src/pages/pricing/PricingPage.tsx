import React from "react";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const pricingPlans = [
    {
        title: "Basic",
        price: "19",
        features: ["100 API requests / month", "Single Image Liveliness", "Email Support"],
        buttonText: "Get Started",
    },
    {
        title: "Pro",
        price: "49",
        features: ["1000 API requests / month", "Single Image + Video Stream", "Priority Support"],
        buttonText: "Start Free Trial",
    },
    {
        title: "Enterprise",
        price: "99",
        features: ["Unlimited API requests", "Dedicated Support", "Custom SLA"],
        buttonText: "Contact Sales",
    },
];

const PricingPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <Navbar/>
                <div className="container py-5">
                    <PricingHeader/>
                    <div className="row">
                        {pricingPlans.map((plan, idx) => (
                            <PricingCard key={idx} {...plan} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default PricingPage;
