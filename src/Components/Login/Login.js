import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <br />
            <from>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='type password'></input>
                <br />
                <input type="submit" value="Login" />
            </from>
        </div>
    );
};

export default Login;