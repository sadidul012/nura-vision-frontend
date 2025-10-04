import PageWrapper from "../pages/components/PageWrapper";
import React from "react";
import {ProtectedRoute} from "./ProtectedRoute";
import AdminDashboardPage from "../pages/dashboard/admin/AdminDashboardPage";

export const adminRoutes = [
    {
        path: "/admin/dashboard",
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <PageWrapper title={"Admin Dashboard | NuraVision"}>
                    <AdminDashboardPage/>
                </PageWrapper>
            </ProtectedRoute>
        ),
    },
];
