import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location.state?.form)
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
            })
    }
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
                <p>New to Burj Al Arab? <Link to="/register">Create Account</Link> </p>
                <div>------------or------------</div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;