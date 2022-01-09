import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    //const { children } = props;
    const allContex = useFirebase();
    return (
        <AuthContex.Provider value={allContex}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;