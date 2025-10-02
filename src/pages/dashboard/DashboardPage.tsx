import React from "react";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";
import DashboardContent from "./DashboardContent";

const DashboardPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <DashboardContent/>
            </div>
            <Footer/>
        </>
    );
};

export default DashboardPage;
