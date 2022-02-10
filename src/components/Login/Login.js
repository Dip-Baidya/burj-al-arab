import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Log In Here PLease!</h1>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Burj Al Arab? <Link to ="/register">Create Account</Link> </p>
                <div>------------or------------</div>
                <button>Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;