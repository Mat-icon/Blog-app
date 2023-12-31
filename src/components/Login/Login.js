import React from 'react'
import './app.css'
import {auth, provider} from "../../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login({setIsAuth}) {
   let navigate = useNavigate();
    const signInWithGoogle = () => {
         signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true)
            localStorage.setItem('isAuth', true);
            navigate('/');
         });
    };

  return (
    <div className='login-page'>
        <p>Sign In With Google to Continue</p>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login