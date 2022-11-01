import React from 'react';
import firebase from 'firebase/app';
import { auth } from './firebase';
// icons
import google from "../asset/google.svg"
// styles 
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.LoginPage}>
            <div className={styles.LoginCard}>
                <h2>Welcome to Bettergram!</h2>
                <div
                 className={styles.button} 
                 onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                 >
                    <img src={google} alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};
export default Login;
