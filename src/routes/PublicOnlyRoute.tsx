import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {JSX} from "react";

interface Props {
    children: JSX.Element;
}

export const PublicOnlyRoute = ({children}: Props) => {
    const {user} = useAuth();

    // If user is already logged in, redirect them to dashboard
    if (user) {
        return <Navigate to="/dashboard" replace/>;
    }

    return children;
};
