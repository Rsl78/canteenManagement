import React from 'react';
import {NavLink} from "react-router";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-eggshell-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center relative z-10 w-full max-w-md">
                <div className="card w-full backdrop-blur-xl bg-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-8 border border-black/10">
                    <form className="space-y-6">
                        <h2 className="text-center text-2xl font-bold  mb-8">
                            Login
                        </h2>
                        {/* Email field */}
                        <div>
                            <label className="block text-sm font-medium  mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2.5 rounded-lg border border-black/10 active:border-dark-emerald bg-black/10  placeholder-black/20 focus:border-transparent transition duration-200 backdrop-blur-sm"
                            />
                        </div>
                        {/* Password field */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2.5 rounded-lg border border-black/10 active:border-dark-emerald bg-black/10  placeholder-black/20 focus:border-transparent transition duration-200 backdrop-blur-sm"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg text-white  font-medium bg-dark-emerald shadow-lg shadow-purple-500/30"
                        >
                            Login
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