/* eslint-disable react/prop-types */
import { createContext } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const value={
        createUser,
        signIn,
        GoogleSignIn
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