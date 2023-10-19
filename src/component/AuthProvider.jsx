/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const upProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
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
        LogOut,
        upProfile,
        loading
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