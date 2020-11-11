import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ErrorLabel from './ErrorLabel';

import './styles.scss';

const SignupForm = () => {
    const initialValues = {
        email: '',
        password: '',
        name: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .trim()
            .max(32, 'Full Name should be less than 32 characters long')
            .required('Please provide a valid full name'),
        email: Yup.string()
            .trim()
            .required('Please provide an email')
            .email('Please use valid email address'),
        password: Yup.string()
            .trim()
            .min(6, 'Password should be at least 6 characters long')
            .required('Please provide a valid password'),
    });

    const onSubmit = async (values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm({});
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
                        <label className="form-label" htmlFor="name">
                            Full Name
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            autoComplete="off"
                        />
                        <ErrorMessage name="name" component={ErrorLabel} />
                    </div>
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
                        <ErrorMessage name="email" component={ErrorLabel} />
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
                        <ErrorMessage name="password" component={ErrorLabel} />
                    </div>

                    <button
                        className="form-btn"
                        type="submit"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        Sign Up
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
