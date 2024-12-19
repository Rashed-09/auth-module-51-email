import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword ( auth, email, password)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
    },[])

    const countryList = {user, logOut, createUser, signinUser, loading, loginWithGoogle}
    return (
       <AuthContext.Provider value={countryList}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}