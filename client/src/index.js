import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import UserContextProvider from './contexts/UserContextProvider';
import TodoContextProvider from "./contexts/TodoContexProvider";

import App from './App';

import './globalStyles/index.scss';


ReactDOM.render(
    <Router>
        <UserContextProvider>
            <TodoContextProvider>
                <App />
            </TodoContextProvider>
        </UserContextProvider>
    </Router>,
    document.getElementById('root'),
);
