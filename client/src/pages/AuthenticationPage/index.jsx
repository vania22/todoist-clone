import React from 'react';

import './styles.scss';

const SignIn = ({ login, signup }) => {
    return (
        <div className="authentication-background">
            <div className="container">
                <a href="/">
                    <img
                        className="logo"
                        alt="Todoist"
                        src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg"
                    />
                </a>
                <h1>{login ? 'Log in' : 'Sign up'}</h1>
            </div>
        </div>
    );
};

export default SignIn;
