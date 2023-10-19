/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const LogOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
    }, [])

    const value={
        user,
        createUser,
        signIn,
        GoogleSignIn,
        LogOut
    }
    
    return (
        <div>
            <AuthContext.Provider value={value}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;