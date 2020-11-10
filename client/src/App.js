import React from 'react';
import { Route } from 'react-router-dom';

import AuthenticationPage from './pages/AuthenticationPage/';

const App = () => {
    return (
        <>
            <Route
                exact
                path="/signin"
                render={() => <AuthenticationPage login />}
            />
            <Route
                exact
                path="/signup"
                render={() => <AuthenticationPage signup />}
            />
        </>
    );
};

export default App;
