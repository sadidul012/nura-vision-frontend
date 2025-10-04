import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import HomePage from "./pages/home/HomePage";
import PricingPage from "./pages/pricing/PricingPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturesPage";
import DemoPage from "./pages/demo/DemoPage";
import EnrollPage from "./pages/demo/enroll/EnrollPage";
import VerifyPage from "./pages/demo/verify/VerifyPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
// import AdminDashboardPage from "./pages/dashboard/admin/AdminDashboardPage";
import UserDashboardPage from "./pages/dashboard/user/UserDashboardPage";
import {ToastProvider} from "./pages/components/ToastProvider";
import PageWrapper from "./pages/components/PageWrapper";
import ProfilePage from "./pages/profile/ProfilePage";
import PaymentPage from "./pages/payment/PaymentPage";


function App() {
    return (

        <Router>
            <div className="app-wrapper">
                <ToastProvider>
                    <Routes>
                        <Route path="/" element={
                            <PageWrapper title={"Home | NuraVision"}>
                                <HomePage/>
                            </PageWrapper>
                        }/>
                        <Route path="/features" element={
                            <PageWrapper title={"Features | NuraVision"}>
                                <FeaturesPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/pricing" element={
                            <PageWrapper title={"Pricing | NuraVision"}>
                                <PricingPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/contact" element={
                            <PageWrapper title={"Contact | NuraVision"}>
                                <ContactPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/demo" element={
                            <PageWrapper title={"Demo | NuraVision"}>
                                <DemoPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/demo/enroll" element={
                            <PageWrapper title={"Enrollment Demo | NuraVision"}>
                                <EnrollPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/demo/verify" element={
                            <PageWrapper title={"Verification Demo | NuraVision"}>
                                <VerifyPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/login" element={
                            <PageWrapper title={"User Login | NuraVision"}>
                                <LoginPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/register" element={
                            <PageWrapper title={"User Register | NuraVision"}>
                                <RegisterPage/>
                            </PageWrapper>
                        }/>
                        {/*<Route path="/dashboard" element={<AdminDashboardPage/>}/>*/}
                        <Route path="/dashboard" element={
                            <PageWrapper title={"Dashboard | NuraVision"}>
                                <UserDashboardPage/>
                            </PageWrapper>
                        }/>
                        <Route path="/profile" element={
                            <PageWrapper title={"Profile | NuraVision"}>
                                <ProfilePage/>
                            </PageWrapper>
                        }/>
                        <Route path="/payment" element={
                            <PageWrapper title={"Payment | NuraVision"}>
                                <PaymentPage/>
                            </PageWrapper>
                        }/>
                    </Routes>
                </ToastProvider>
            </div>
        </Router>
    );
}

export default App;
