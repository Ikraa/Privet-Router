import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const history = useNavigate()
    const location = useLocation()
    let {from} = location.state || {
        from: {
            pathname: "/"
        }
    };
    


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                // history(from);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({});
            
          })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("user inside state", user)
                setUser(user);
            }

        });
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;