import {createContext, useContext, useEffect, useState, ReactNode} from "react";

type UserRole = "guest" | "user" | "admin";

interface User {
    name: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load from localStorage on page refresh
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const login = (role: UserRole) => {
        const loggedUser = {name: "John Doe", role};
        setUser(loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;
