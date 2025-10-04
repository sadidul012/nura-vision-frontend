import PageWrapper from "../pages/components/PageWrapper";
import React from "react";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import {PublicOnlyRoute} from "./PublicOnlyRoute";

export const publicOnlyRoutes = [
    {
        path: "/login",
        element: (
            <PublicOnlyRoute>
                <PageWrapper title={"User Login | NuraVision"}>
                    <LoginPage/>
                </PageWrapper>
            </PublicOnlyRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <PublicOnlyRoute>
                <PageWrapper title={"User Register | NuraVision"}>
                    <RegisterPage/>
                </PageWrapper>
            </PublicOnlyRoute>
        ),
    },
];
