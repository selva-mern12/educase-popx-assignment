import React, { useState, useEffect } from "react";
import { RiEyeCloseFill, RiEyeLine } from "react-icons/ri";

const Signup = ({pageHandler}) => {
    const [showPassword, setShowPassword] = useState(false);
    
    useEffect(() => {
        document.title = "popX - SignUp";
    })

    return (
        <div className="w-full max-w-[400px] h-screen mx-auto flex flex-col bg-white p-6">
            <h1 className="text-3xl self-start w-4/6 font-semibold text-gray-800 mb-4 animate-fade-in-down">Create your PopX account</h1>
            <div className="w-full  flex-1 flex flex-col justify-between">
                <div>
                    <div className="relative">
                        <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-100">Full Name*</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up bg-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-200">Phone number*</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up animation-delay-100 bg-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-300">Email address*</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up animation-delay-200 bg-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-400">Password*</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create your password"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up animation-delay-300 bg-transparent pr-10"
                        />
                        <button
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute top-6 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                            {showPassword ? <RiEyeLine /> : <RiEyeCloseFill />}
                        </button>
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-500">Company name</label>
                        <input
                            type="text"
                            placeholder="Company name(optional)"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up animation-delay-400 bg-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm text-gray-600 mb-2 animate-fade-in-down animation-delay-600">Are you an Agency?*</label>
                        <div className="flex items-center space-x-4 animate-slide-up animation-delay-500">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    defaultChecked
                                    className="h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500 transition-transform duration-200 ease-in-out checked:scale-110 cursor-pointer"
                                />
                                <span className="ml-2 text-sm text-gray-600 group-hover:text-purple-700 transition-colors duration-200">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    className="h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500 transition-transform duration-200 ease-in-out checked:scale-110 cursor-pointer"
                                />
                                <span className="ml-2 text-sm text-gray-600 group-hover:text-purple-700 transition-colors duration-200">No</span>
                            </label>
                        </div>
                    </div>
                </div>
                <button
                  onClick={() => pageHandler('signin')}
                  className="w-full bg-purple-500 text-white font-medium py-3 rounded-md hover:bg-purple-700 transition-all duration-300 ease-in animate-slide-up animation-delay-600">
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Signup;