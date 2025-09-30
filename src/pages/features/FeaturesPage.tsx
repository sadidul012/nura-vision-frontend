import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import Features from "./Features";


const FeaturesPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <Features/>
            </div>
            <Footer/>
        </>

    );
};

export default FeaturesPage;
