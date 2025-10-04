import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import ProfileContent from "./ProfileContent";

const DemoPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <ProfileContent/>
                <div className={"mb-5"}></div>
            </div>
            <Footer/>
        </>
    );
};

export default DemoPage;
