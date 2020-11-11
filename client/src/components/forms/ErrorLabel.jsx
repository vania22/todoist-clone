import React from 'react';
import './styles.scss';

const ErrorLabel = ({ children }) => {
    return <small className="form-error-label">{children}</small>;
};

export default ErrorLabel;
