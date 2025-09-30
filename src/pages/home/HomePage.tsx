import React from 'react';
import MainMenu from '../components/common/MainMenu';
import Hero from './Hero';
import Features from './Features';
import Footer from '../components/common/Footer';
import HowItWorks from "./HowItWorks";
import UseCases from "./UseCases";
import Contact from "./Contact";
import Pricing from "./Pricing";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <Hero/>
                <Features/>
                <HowItWorks/>
                <UseCases/>
                <Pricing/>
                <Contact/>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;
