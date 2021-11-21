import { createContext, useState } from 'react'

// interface contextValue
interface ContextValueI {
    login: any;
    logged: boolean;
    logout: any;
}

export const AuthContext = createContext<ContextValueI | null>(null);

export default function AuthProvider(props: any) {
    const [user, setUser] = useState(null);
  
    // login function
    const login = (credentials: any): void => {
        setUser(credentials);
    }

    const logged: boolean = !!user;

    const logout = (): void => {setUser(null)};

    const contextValue:ContextValueI = {
        login,
        logged,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
