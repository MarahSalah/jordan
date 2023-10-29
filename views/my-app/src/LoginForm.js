import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (!formData.password || formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const redirectToHome = () => {
        window.location.href = '/home';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/login', formData);
                console.log(response.data.message);

                const user = response.data.user;
                if (user) {
                    redirectToHome();
                    alert(`Welcome, ${user.username}!`);
                } else {
                    console.error('User not found.');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                setErrors(error.response.data.errors);
            }
        }
    };

    const divStyle = {
        backgroundImage: 'url("https://real-bedouin-experience-tours-camp-wadi-rum.albooked.com/data/Photos/OriginalPhoto/7798/779853/779853549/Real-Bedouin-Experience-Tours-Camp-Hotel-Wadi-Rum-Exterior.JPEG")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={divStyle}>
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-black text-center">Login</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email 
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-blue-900 border-blue-900 placeholder-blue-900 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-blue-900 border-blue-900 placeholder-blue-900 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-white hover:bg-white-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-950"
                        >
                            Login 
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center text-blue-900 mt-2">
                    Don't have an account? 
                    <a href="/Registration" className="text-blue-400 hover:underline">Register here</a>
                </p>
            </div>
        </div>
    );
};
            
      
    


export default LoginForm;
