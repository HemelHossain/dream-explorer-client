import React, { createContext, useEffect, useState } from 'react';
import app from '../../Component/Firebase/Firebase.init';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();



    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailVerify = () =>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const profileUpdate = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            if(currentUser === null || currentUser.emailVerified === true){
            setUsers(currentUser);   
        }
        setLoading(false); 
            
        });
        return () => {
            unSubscribe();
        };
    },[])

    const authInfo = {users, setUsers, createUser, emailVerify ,signIn, googleSignIn, profileUpdate, loading,setLoading ,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
            
        </div>
    );
};
export default AuthProvider;