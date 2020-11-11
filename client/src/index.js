import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import AppContextProvider from './contexts/userContext';

ReactDOM.render(
    <Router>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Router>,
    document.getElementById('root'),
);
