import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import PaymentContent from "./PaymentContent";

const DemoPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <PaymentContent/>
                <div className={"mb-5"}></div>
            </div>
            <Footer/>
        </>
    );
};

export default DemoPage;
