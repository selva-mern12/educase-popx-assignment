import {useEffect} from 'react';

const Login = ({pageHandler}) => {
    
    useEffect(() => {
    document.title = "popX - SignIn";
    })

    return(
    <div className="w-full max-w-[400px] h-screen mx-auto flex flex-col items-center bg-white p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 animate-fade-in-down">Sign in to your PopX account</h1>
        <p className="text-sm text-gray-600 text-center mb-6 animate-fade-in-down animation-delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="w-full max-w-xs">
            <div className="relative">
                <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-300">Email Address</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up bg-transparent"
                />
            </div>
            <div className="relative">
                <label className="absolute -top-2.5 left-2.5 bg-white px-1 text-sm text-purple-700 animate-fade-in-down animation-delay-400">Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slide-up animation-delay-200 bg-transparent"
                />
            </div>
            <button
              onClick={() => pageHandler('account')}
              className="w-full bg-gray-300 text-white font-medium py-3 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in animate-slide-up animation-delay-500">
                Login
            </button>
        </div>
    </div>
)
}
export default Login;