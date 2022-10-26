import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/Firebase.config';
import {getAuth,onAuthStateChanged,signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logout = ()=> {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=> {
            unsubscribe();
        }
    },[]);
    const authInfo = {user,providerLogin,logout};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;