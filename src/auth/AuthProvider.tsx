import { createContext, useState } from 'react'

// interface contextValue
interface ContextValueI {
    login: any;
    logged: any;
    logout: any;
    user: any
}

interface UserI {
    userName: string;
    email: string;
    password: string;
    rePassword: string;
}

export const AuthContext = createContext<ContextValueI | null>(null);

export default function AuthProvider(props: any) {


    const [user, setUser] = useState<UserI | null>(null);

    // login function
    const login = (credentials: UserI): void => {
        setUser(credentials);
    }

    // the user is logged
    let logged: boolean = !!user

    const logout = (): void => {
        setUser(null);
        localStorage.setItem('user', JSON.stringify( null ));
    };
    
    const contextValue: ContextValueI = {
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
