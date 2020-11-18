import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import UserContextProvider from './contexts/UserContextProvider';
import TodoContextProvider from "./contexts/TodoContextProvider";

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
