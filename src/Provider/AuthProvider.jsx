import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../js_config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider();

    // Create user for authenticate with email and passcode
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // SignOut user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Sign in with google
    const signInWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider)
    }
    // observe user
    useEffect(() => {
        const unSubscibe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setLoading(false)
        })
        return () => {
           return unSubscibe()
        }
    }, [])




    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}