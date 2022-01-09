import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email'></input>
                <br/>
                <label htmlFor='password'>Password:</label>
                <input type='password'></input>
                <br/>
                <input type='submit' value='Submit'></input>
            </form>
            <Link to='/login'>Already Registered?</Link>

        </div>
    );
};

export default Register;