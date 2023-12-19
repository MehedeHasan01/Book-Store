import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Config/Firebase/Firebase.config';
export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const createUser =(email, password)=>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const Login = (email, password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const LogOut = ()=>{
        setLoding(true);
        return signOut(auth)
    }

    // Socail Media Login
    const googleLogin =()=>{
        setLoding(true);
        return signInWithPopup(auth, GoogleProvider)
    };

    const githubLogin =()=>{
        setLoding(true);
        return signInWithPopup(auth, GithubProvider)
    };


    useEffect(()=>{
       const unSubcribe = onAuthStateChanged(auth, currentUser=>{
        setLoding(false)
        setUser(currentUser)
        });

        return ()=>{
            unSubcribe()
        }

    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        Login,
        LogOut,
        googleLogin,
        githubLogin,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;