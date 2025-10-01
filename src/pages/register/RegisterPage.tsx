import React from 'react';
import MainMenu from '../components/common/MainMenu';
import Footer from '../components/common/Footer';
import RegisterForm from "./RegisterForm";

const LoginPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <RegisterForm/>
            </div>
            <Footer/>
        </>
    );
};

export default LoginPage;
