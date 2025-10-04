import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {JSX} from "react";

interface Props {
    children: JSX.Element;
    allowedRoles?: string[];
}

export const ProtectedRoute = ({children, allowedRoles}: Props) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace/>;
    }

    return children;
};
