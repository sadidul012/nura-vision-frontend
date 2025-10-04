import {ProtectedRoute} from "./ProtectedRoute";
import PageWrapper from "../pages/components/PageWrapper";
import UserDashboardPage from "../pages/dashboard/user/UserDashboardPage";
import ProfilePage from "../pages/profile/ProfilePage";
import PaymentPage from "../pages/payment/PaymentPage";
import React from "react";

export const userRoutes = [
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute allowedRoles={["user", "admin"]}>
                <PageWrapper title={"Dashboard | NuraVision"}>
                    <UserDashboardPage/>
                </PageWrapper>
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute allowedRoles={["user", "admin"]}>
                <PageWrapper title={"Profile | NuraVision"}>
                    <ProfilePage/>
                </PageWrapper>
            </ProtectedRoute>
        ),
    },
    {
        path: "/payment",
        element: (
            <ProtectedRoute allowedRoles={["user", "admin"]}>
                <PageWrapper title={"Payment | NuraVision"}>
                    <PaymentPage/>
                </PageWrapper>
            </ProtectedRoute>
        ),
    },
];
