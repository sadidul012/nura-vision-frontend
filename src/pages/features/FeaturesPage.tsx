import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Features from "./Features";


const FeaturesPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <Navbar/>
                <Features/>
            </div>
            <Footer/>
        </>

    );
};

export default FeaturesPage;
