import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/forms/LoginForm';
import SignupForm from '../../components/forms/SignupForm';

import './styles.scss';

const SignIn = ({ login, signup }) => {
    return (
        <div className="authentication-background">
            <div className="authentication-container">
                <a href="/">
                    <img
                        className="logo"
                        alt="Todoist"
                        src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg"
                    />
                </a>
                <h1>{login ? 'Log in' : 'Sign up'}</h1>
                {login ? <LoginForm /> : <SignupForm />}
                <div className="authentication-separator" />
                <p className="authentication-redirect">
                    {login ? (
                        <>
                            Don't have an account?{' '}
                            <Link to="/signup">Sign up</Link>
                        </>
                    ) : (
                        <>
                            Already signed up?{' '}
                            <Link to="/signin">Go to login</Link>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default SignIn;
