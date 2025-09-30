import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import Features from "./Features";
import Hero from "./Hero";
import GetStarted from "./GetStarted";


const FeaturesPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <Hero/>
                <Features/>
                <GetStarted/>
            </div>
            <Footer/>
        </>

    );
};

export default FeaturesPage;
