import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import './Login.css'
import firebaseConfig from '../firebase';
import { UserContext } from '../App/App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).
        then( result=>{
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    return (
        <div className="container-fluid px-0">
        
            <div className="login">
                <button onClick={handleGoogleSignIn} className="login-btn"><i className="fab fa-google"></i> Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;