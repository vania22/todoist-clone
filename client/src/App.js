import React from 'react';
import {Route} from 'react-router-dom';

import AuthenticationPage from './pages/AuthenticationPage/';
import PotectedRoute from "./pages/PotectedRoute";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <>
            <PotectedRoute
                exact
                path="/signin"
                component={() => <AuthenticationPage signin/>}
            />

            <PotectedRoute
                exact
                path="/signup"
                component={() => <AuthenticationPage signup/>}
            />
            <PotectedRoute
                path="/"
                component={HomePage}
            />

        </>
    );
};

export default App;
