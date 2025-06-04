import React from 'react';

const Welcome = ({pageHandler}) => (
    <div className="w-full max-w-[400px] h-screen mx-auto flex flex-col justify-end items-center bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 animate-fade-in-down">Welcome to PopX</h1>
        <p className="text-sm text-gray-600 text-center mb-6 animate-fade-in-down animation-delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          onClick={() => pageHandler('signup')}
          className="w-full max-w-xs bg-purple-500 text-white font-medium py-3 rounded-md mb-3 hover:bg-purple-700 animate-slide-up transition-all duration-300 ease-in">
            Create Account
        </button>
        <button
          onClick={() => pageHandler('signin')}
          className="w-full max-w-xs bg-purple-200 text-purple-800 font-medium py-3 rounded-md hover:bg-purple-300 animate-slide-up animation-delay-400 transition-all duration-300 ease-in">
            Already Registered? Login
        </button>
    </div>
)

export default Welcome;