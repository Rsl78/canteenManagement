import React from 'react';
import {NavLink, useNavigate} from "react-router";
import {useFormik} from "formik";
import axios from "axios";
import {useAuth} from "../hooks/useAuth.js";

const LoginPage = () => {
    const navigate = useNavigate();
    const {setAuth} = useAuth()
    const validate = values => {
        const errors = {};
        if (!values.userEmail) {
            errors.userEmail = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
            errors.userEmail = 'Invalid email address';
        }

        if (!values.userPassword) {
            errors.userPassword = 'Required';
        } else if (values.userPassword.length < 8) {
            errors.userPassword = 'Must be 8 characters or more';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            userEmail: '',
            userPassword: ''
        }, validate,
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://192.168.68.157:8083/loginapp", values);
                // console.log("Login successful: ", response.data);
                if(response.status === 200){
                    const {token, username} = response.data;
                    setAuth({token, username});
                    navigate("/");
                }

            } catch (error) {
                console.error("Registration failed: ", error);
            }
        }
    });
    return (
        <div className="min-h-screen flex items-center justify-center bg-eggshell-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center relative z-10 w-full max-w-md">
                <div className="card w-full backdrop-blur-xl bg-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-8 border border-black/10">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <h2 className="text-center text-2xl font-bold  mb-8">
                            Log in
                        </h2>
                        {/* Email field */}
                        <div>
                            <label htmlFor={"userEmail"} className="block text-sm font-medium  mb-1">Email</label>
                            <input
                                id={"userEmail"}
                                name={"userEmail"}
                                type="userEmail"
                                placeholder="Enter your email"
                                onChange={formik.handleChange}
                                value={formik.values.userEmail}
                                className="w-full px-4 py-2.5 rounded-lg border border-black/10 active:border-dark-emerald bg-black/10  placeholder-black/20 focus:border-transparent transition duration-200 backdrop-blur-sm"
                            />
                            {formik.errors.userEmail ? <div className={"text-red-600 text-xs font-semibold pt-1"}>{formik.errors.userEmail}</div> : null}
                        </div>

                        {/* Password field */}
                        <div>
                            <label htmlFor={"userPassword"} className="block text-sm font-medium mb-1">Password</label>
                            <input
                                id={"userPassword"}
                                name={"userPassword"}
                                onChange={formik.handleChange}
                                value={formik.values.userPassword}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2.5 rounded-lg border border-black/10 active:border-dark-emerald bg-black/10  placeholder-black/20 focus:border-transparent transition duration-200 backdrop-blur-sm"
                            />
                            {formik.errors.userPassword ? <div className={"text-red-600 text-xs font-semibold pt-1"}>{formik.errors.userPassword}</div> : null}
                        </div>


                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg text-white  font-medium bg-dark-emerald shadow-lg shadow-purple-500/30"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Sign up link */}
                    <p className="mt-4 text-center text-sm text-gray-400">
                        New here?{" "}
                        <NavLink
                            to="/register"
                            className="font-medium text-sky-400 hover:text-sky-300"
                        >
                            Create an account
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default LoginPage;