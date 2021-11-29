import { createContext, useState } from 'react'

// interface contextValue
interface ContextValueI {
    login: any;
    logged: boolean;
    logout: any;
    user: any
}

export const AuthContext = createContext<ContextValueI | null>(null);

export default function AuthProvider(props: any) {
    const [user, setUser] = useState<object|null>(null);

    // login function
    const login = (credentials: object): void => {
        setUser(credentials);
    }

    const logged: boolean = !!user;

    const logout = (): void => {setUser(null)};

    const contextValue:ContextValueI = {
        login,
        logged,
        logout,
        user
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
