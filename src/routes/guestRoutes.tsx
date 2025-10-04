import PageWrapper from "../pages/components/PageWrapper";
import React from "react";
import HomePage from "../pages/home/HomePage";
import FeaturesPage from "../pages/features/FeaturesPage";
import PricingPage from "../pages/pricing/PricingPage";
import ContactPage from "../pages/contact/ContactPage";
import DemoPage from "../pages/demo/DemoPage";
import EnrollPage from "../pages/demo/enroll/EnrollPage";
import VerifyPage from "../pages/demo/verify/VerifyPage";

export const guestRoutes = [
    {
        path: "/",
        element: (
            <PageWrapper title={"Home | NuraVision"}>
                <HomePage/>
            </PageWrapper>
        ),
    },
    {
        path: "/features",
        element: (
            <PageWrapper title={"Features | NuraVision"}>
                <FeaturesPage/>
            </PageWrapper>
        ),
    },
    {
        path: "/pricing",
        element: (
            <PageWrapper title={"Pricing | NuraVision"}>
                <PricingPage/>
            </PageWrapper>
        ),
    },
    {
        path: "/contact",
        element: (
            <PageWrapper title={"Contact | NuraVision"}>
                <ContactPage/>
            </PageWrapper>
        ),
    },
    {
        path: "/demo",
        element: (
            <PageWrapper title={"Demo | NuraVision"}>
                <DemoPage/>
            </PageWrapper>
        ),
    },
    {
        path: "/demo/enroll",
        element: (
            <PageWrapper title={"Enrollment Demo | NuraVision"}>
                <EnrollPage/>
            </PageWrapper>
        ),
    },
    {
        path: "/demo/verify",
        element: (
            <PageWrapper title={"Verification Demo | NuraVision"}>
                <VerifyPage/>
            </PageWrapper>
        ),
    },
];
