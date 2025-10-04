import {createContext, useContext, useState, ReactNode} from "react";

type UserRole = "guest" | "user" | "admin";

interface AuthContextType {
    user: { name: string; role: UserRole } | null;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<{ name: string; role: UserRole } | null>(null);

    const login = (role: UserRole) => setUser({name: "John", role});
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;
