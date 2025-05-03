import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
  

    const [loading, setLoading] = useState(false);

    const [passwordError, setPasswordError] = useState("");

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear any previous error as the user is typing
        if (name === "password") {
            setPasswordError(""); // Clear password error as the user types
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);


        // Password validation checks
        if (formData.password.length < 8 || !passwordRegex.test(formData.password)) {
            let errorMessage = "";

            if (formData.password.length < 8) {
                errorMessage += "Password must be at least 8 characters long. ";
            }

            if (!passwordRegex.test(formData.password)) {
                errorMessage += "Password must include both letters and numbers.";
            }

            setPasswordError(errorMessage.trim());
            setLoading(false);
            return;
        }



        setPasswordError(""); // Clear password error if it's valid


        // Simulate login delay
        setTimeout(() => {
            console.log("Form submitted", formData);
            setLoading(false);
            navigate("/home");
        }, 2000);
    };


    return (
        <div className="flex h-screen items-center justify-center bg-[#bacbef] px-4">
            <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden md:h-[90vh]">
                {/* Left Section */}
                <div className="w-full md:w-1/2 bg-[#3b4794] text-white p-8 flex flex-col justify-center items-center md:items-start">
                    <img src="./assets/logo.png" />
                    <p className="text-sm opacity-90 mb-6 text-center md:text-left font-[DM Sans]">
                        Login to your student support portal to submit and track tickets.
                    </p>
                    <a href="https://ccodel.covenantuniversity.edu.ng/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#ffffff] hover:bg-[#e6c5b1] text-[#3b4794] px-4 py-2 rounded-md mb-3 w-full md:w-auto font-[DM Sans]">
                            Learn More
                        </button>
                    </a>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#3b4794] mb-2 text-center md:text-left font-[Merriweather]">
                        Support Login
                    </h2>
                    <p className="text-sm text-gray-500 mb-6 text-center md:text-left font-[DM Sans]">
                        Enter your credentials to access your support account.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                        />
                        <div className="relative mb-4">

                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>) : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 960 960"
                                    width="24px"
                                    fill="#000000"
                                >
                                    <path d="M644 532l-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660 460q0 20-4 37.5T644 532Zm128 126l-58-56q38-29 67.5-63.5T832 460q-50-101-143.5-160.5T480 240q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920 460q-23 59-60.5 109.5T772 658Zm20 246L624 678q-35 11-70.5 16.5T480 700q-151 0-269-83.5T40 460q21-53 53-98.5t73-81.5L56 168l56-56 736 736-56 56ZM222 296q-29 26-53 57t-41 67q50 101 143.5 160.5T480 680q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300 460q0-11 1.5-21t4.5-21l-84-82Z" />
                                </svg>)}
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                            />
                        </div>


                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center text-sm text-gray-600 font-[DM Sans]">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a
                                href="#"
                                className="text-[#3179bc] text-sm hover:underline font-[DM Sans]"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        {passwordError && <p className="text-red-500 text-sm mb-2 font-[DM Sans]">{passwordError}</p>}
                        
                        <button
                            type="submit"
                            className="w-full bg-[#3b4794] hover:bg-[#3179bc] text-white font-bold p-3 rounded font-[DM Sans] flex justify-center items-center"
                            disabled={loading || passwordError} // Disable if password has an errordisabled={loading}
                        >
                            {loading ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    ></path>
                                </svg>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4 font-[DM Sans]">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-[#3179bc] hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
