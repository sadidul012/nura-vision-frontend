import React from "react";
import MainMenu from "../../components/common/MainMenu";
import Footer from "../../components/common/Footer";
import Content from "./Content";

const VerifyPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <Content/>
                <div className={"mb-5"}></div>
            </div>
            <Footer/>
        </>
    );
};

export default VerifyPage;
