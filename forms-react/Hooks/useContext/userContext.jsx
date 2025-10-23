import { createContext, useState } from "react";

// 1. create the context
export const UserContext = createContext();

// 2. Create a provider component
export function UserProvider({ children }) {
    const [user, setUser] = useState('Abhishek');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}