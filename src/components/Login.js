import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import firebase from 'firebase';
import {auth} from "./firebase.js";


 const Login = () => {
  return (
    <div id = "login-page">
        <div id = "login-card">
            <h2>Welcome to Unichat</h2>

            <div className = "login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined/> Log in with Google
            </div>
            
            <br />
            <br />
            <div className = "login-button facebook"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} 
            >
                <FacebookOutlined/> Log in with Facebook
            </div>

        </div>
    </div>
  );
}
export default Login;
