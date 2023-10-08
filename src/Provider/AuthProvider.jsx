import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app)
// import { FacebookAuthProvider, signInWithRedirect } from "firebase/auth";



// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google provider 
    const provider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    // facebookPopUp 
//    const facebookPopUp =()=>{
//     return signInWithPopup(auth, facebookProvider)
//     .then(result => {
//         console.log(result.user)
//     })
//     .catch(error => {
//         console.error(error)
//     })
//    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }





    const info = {
        user,
        loading,
        userCreate,
        signIn,
        googleSignIn,
        // facebookPopUp,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;