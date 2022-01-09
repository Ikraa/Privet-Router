import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle}>Google sign in</button>
            <br />
            < Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;