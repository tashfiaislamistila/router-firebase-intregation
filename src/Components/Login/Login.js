import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    // console.log(user);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                // console.log(result);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <br />
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='type password'></input>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;