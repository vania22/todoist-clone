import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import ErrorLabel from './ErrorLabel';

import {UserContext} from '../../contexts/UserContextProvider.js';
import {setUserTokenToLocalStorage, signIn} from "../../api/authentication";

import './styles.scss';


const SigninForm = () => {
    const {setUser} = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState(false);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .trim()
            .required('Please provide an email')
            .email('Please use valid email address'),
        password: Yup.string()
            .trim()
            .required('Please provide a password'),
    });

    const onSubmit = (values, onSubmitProps) => {
        setError(false)

        signIn(values).then(data => {
            setUser(data.user)
            setUserTokenToLocalStorage(data.token)
            history.push('/');
        }).catch(error => {
            setError(true)
        })
        onSubmitProps.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur
        >
            {(formik) => (
                <Form className="form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <Field
                            type="text"
                            id="email"
                            name="email"
                            className="form-input"
                            autoComplete="off"
                        />
                        <ErrorMessage name="email" component={ErrorLabel}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            autoComplete="off"
                        />
                        <ErrorMessage name="password" component={ErrorLabel}/>
                    </div>
                    {error && (
                        <div className="form-error-label--big">Invalid login details</div>
                    )}
                    <button
                        className="form-btn"
                        type="submit"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        Log In
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SigninForm;
