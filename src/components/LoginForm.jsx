import React from "react";
import { useFormik } from "formik";
import { setSession } from "../utils/localStorageHelpers";

const LoginForm = ({ onLogin }) => {
    const formik = useFormik({
        initialValues: { username: "", password: "" },
        validate: (values) => {
            let errors = {};
            if (!values.username) errors.username = "Username is required";
            if (!values.password) errors.password = "Password is required";
            return errors;
        },
        onSubmit: (values) => {
            setSession(values.username);
            onLogin();
        },
    });

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
