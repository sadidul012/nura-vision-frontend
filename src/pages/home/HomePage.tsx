import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <Navbar/>
                <Hero/>
                <Features/>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;
