import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import Content from "./Content";
import Hero from "./Hero";

const DemoPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <Hero/>
                <Content/>
                <div className={"mb-5"}></div>
            </div>
            <Footer/>
        </>
    );
};

export default DemoPage;
