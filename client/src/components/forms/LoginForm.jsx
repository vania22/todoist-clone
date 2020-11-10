import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ErrorLabel from './ErrorLabel';

const LoginForm = () => {
    const initialValues = {
        email: 'krupskiy111@gmail.com',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Please provide an email')
            .email('Please use valid email address'),
        password: Yup.string().required('Please provide a password'),
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
                <Form>
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
                        className="authentication--btn"
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

export default LoginForm;
