import React, { createContext, useState, useContext, ReactNode } from 'react';

const AuthContext = createContext<{
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    getToken: () => string | null;
} | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [token, setToken] = useState<string | null>(null);

    const getToken = () => {
        return localStorage.getItem('token')
    }

    const login = (token: string) => {
        setIsAuthenticated(true);
        localStorage.setItem('token', token)
    }

    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, getToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};