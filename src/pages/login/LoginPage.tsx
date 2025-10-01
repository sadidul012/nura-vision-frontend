import React from 'react';
import MainMenu from '../components/common/MainMenu';
import Footer from '../components/common/Footer';
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <LoginForm/>
            </div>
            <Footer/>
        </>
    );
};

export default LoginPage;
