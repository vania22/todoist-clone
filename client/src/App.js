import React from 'react';

import PotectedRoute from "./pages/PotectedRoute";
import AuthenticationPage from './pages/AuthenticationPage/';
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
                path="/dashboard/:listId"
                exact
                component={HomePage}
            />

        </>
    );
};

export default App;
