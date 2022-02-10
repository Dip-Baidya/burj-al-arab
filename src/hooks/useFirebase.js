import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser("")
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;