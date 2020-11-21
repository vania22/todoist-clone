import React, {useContext} from 'react';
import {useLocation, Redirect, Route} from 'react-router-dom';

import {UserContext} from "../contexts/UserContextProvider";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {user} = useContext(UserContext);
    const {pathname} = useLocation()

    return <Route {...rest} render={(props) => {
        if (user) {
            if (pathname === '/signup' || pathname === '/signin') {
                return <Redirect to='/dashboard/all'/>
            }
        } else {
            if (pathname !== '/signup' && pathname !== '/signin') {

                return <Redirect to='/signup'/>
            }
        }
        return <Component {...props} />
    }}/>
}

export default ProtectedRoute;