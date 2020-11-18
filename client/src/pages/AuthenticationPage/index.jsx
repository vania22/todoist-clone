import React from 'react';
import {Link} from 'react-router-dom';

import SigninForm from '../../components/forms/SigninForm';
import SignupForm from '../../components/forms/SignupForm';

import './styles.scss';

const AuthenticationPage = ({signin}) => {
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
                <h1>{signin ? 'Log in' : 'Sign up'}</h1>
                {signin ? <SigninForm/> : <SignupForm/>}
                <div className="authentication-separator"/>
                <p className="authentication-redirect">
                    {signin ? (
                        <>
                            Don't have an account?
                            <Link to="/signup">Sign up</Link>
                        </>
                    ) : (
                        <>
                            Already signed up?
                            <Link to="/signin">Go to login</Link>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthenticationPage;
