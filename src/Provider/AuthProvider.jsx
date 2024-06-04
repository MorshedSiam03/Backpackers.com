import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googlePRovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googlePRovider)
    }
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('User in the auth sate changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> {unsubscribe();}
    },[])

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logoutUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;