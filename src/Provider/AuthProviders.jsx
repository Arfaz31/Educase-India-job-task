import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Home/firebase.init";



export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProviders = ({ children }) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

    // Current User Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          console.log('currentUser', currentUser )
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);

        // update user profile
        const userUpdateData =(user,  name)=>{
          setLoading(true)
         return  updateProfile (user, {
           displayName: name,
           
       }) }

   //google signIn
   const googleSignIn = ( ) =>{
    setLoading(true)
   return signInWithPopup (auth, googleProvider)   
}
  

    const authInfo ={
        user,
        createUser, 
        signIn,
        logOut,
        userUpdateData,
        googleSignIn,
        loading
    
     
        }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
