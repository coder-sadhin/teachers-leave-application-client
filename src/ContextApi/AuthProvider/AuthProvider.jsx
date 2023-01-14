import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile, updatePassword, sendEmailVerification
} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dashboardModalIcon, setDashboardModalIcon] = useState(false)

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const upDateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const userVerification = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const updatePass = (newPass) => {
        setLoading(true)
        return updatePassword(auth.currentUser, newPass)
    }

    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])

    const LogOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        login,
        user,
        LogOut,
        upDateUser,
        loading,
        signInWithGoogle,
        updatePass,
        setLoading,
        userVerification,
        dashboardModalIcon,
        setDashboardModalIcon
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;