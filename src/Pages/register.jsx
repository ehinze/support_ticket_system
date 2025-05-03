import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Reister() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState({
        passwords:(false),
        confirmpass:(false),
    });



    const [formData, setFormData] = useState({
        matric_number: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const [passwordError, setPasswordError] = useState("");

   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password.length < 8 || !passwordRegex.test(formData.password) || formData.password !== formData.confirmPassword) {
            let errorMessage = "";

            if (formData.password.length < 8) {
                errorMessage += "Password must be at least 8 characters long. ";
            }

            if (!passwordRegex.test(formData.password)) {
                errorMessage += "Password must include both letters and numbers.";
            }

            if (formData.password !== formData.confirmPassword) {
                errorMessage += "Password are not the same.";
            }

            setPasswordError(errorMessage.trim());
            setLoading(false);
            return;
        }
        setPasswordError(""); 


        // Simulate login delay
        setTimeout(() => {
            console.log("Form submitted", formData);
            setLoading(false);
            navigate("/");
        }, 2000);

    }

    return (
        <>
            <div className="flex h-screen items-center justify-center bg-[#bacbef] px-4">
                <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden md:h-[90vh]">

                    {/* Left Section (Info Panel) */}
                    <div className="w-full md:w-1/2 bg-[#3b4794] text-white p-8 flex flex-col justify-center items-center md:items-start">
                        <img src="./assets/logo.png" alt="CCODEL Logo" />
                        <p className="text-sm opacity-90 mb-6 text-center md:text-left font-[DM Sans]">
                            Register for the student support portal to submit and track tickets.
                        </p>
                        <a href="https://ccodel.covenantuniversity.edu.ng/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#ffffff] hover:bg-[#e6c5b1] text-[#3b4794] px-4 py-2 rounded-md mb-3 w-full md:w-auto font-[DM Sans]">
                            Learn More
                        </button>
                        </a>
                    </div>

                    {/* Right Section (Registration Form) */}
                    <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-[#3b4794] mb-2 text-center md:text-left font-[Merriweather]">
                            Support Registration
                        </h2>
                        <p className="text-sm text-gray-500 mb-6 text-center md:text-left font-[DM Sans]">
                            Create an account to access the support system.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                required
                                name="firstname"
                                placeholder="First Name"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="w-full p-[8px] border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="w-full p-[8px] border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                            />
                            <input
                                type="text"
                                name="matric_number"
                                placeholder="Matric Number"
                                value={formData.matric_number}
                                required
                                onChange={handleChange}
                                className="w-full p-[8px] border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-[8px] border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                            />
                            <div className="relative mb-4">

                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                    onClick={() =>
                                        setShowPassword((prevState) => ({
                                          ...prevState,
                                          passwords: !prevState.passwords,
                                        }))
                                    }
                                    
                                >
                                    {showPassword.passwords ? (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>) : (<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 960 960"
                                        width="18px"
                                        fill="#000000"
                                    >
                                        <path d="M644 532l-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660 460q0 20-4 37.5T644 532Zm128 126l-58-56q38-29 67.5-63.5T832 460q-50-101-143.5-160.5T480 240q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920 460q-23 59-60.5 109.5T772 658Zm20 246L624 678q-35 11-70.5 16.5T480 700q-151 0-269-83.5T40 460q21-53 53-98.5t73-81.5L56 168l56-56 736 736-56 56ZM222 296q-29 26-53 57t-41 67q50 101 143.5 160.5T480 680q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300 460q0-11 1.5-21t4.5-21l-84-82Z" />
                                    </svg>)}
                                </span>
                              
                                <input
                                    type={showPassword.passwords ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                                />
                            </div>
                            <div className="relative mb-4">

                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                    onClick={() =>
                                        setShowPassword((prevState) => ({
                                          ...prevState,
                                          confirmpass: !prevState.confirmpass,
                                        }))
                                      }
                                   
                                >
                                    {showPassword.confirmpass ? (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>) : (<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 960 960"
                                        width="18px"
                                        fill="#000000"
                                    >
                                        <path d="M644 532l-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660 460q0 20-4 37.5T644 532Zm128 126l-58-56q38-29 67.5-63.5T832 460q-50-101-143.5-160.5T480 240q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920 460q-23 59-60.5 109.5T772 658Zm20 246L624 678q-35 11-70.5 16.5T480 700q-151 0-269-83.5T40 460q21-53 53-98.5t73-81.5L56 168l56-56 736 736-56 56ZM222 296q-29 26-53 57t-41 67q50 101 143.5 160.5T480 680q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300 460q0-11 1.5-21t4.5-21l-84-82Z" />
                                    </svg>)}
                                </span>

                                <input
                                    type={showPassword.confirmpass ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3179bc] font-[DM Sans]"
                                />
                            </div>
                           
                            {passwordError && <p className="text-red-500 text-sm mb-2 font-[DM Sans]">{passwordError}</p>}

                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full bg-[#3b4794] hover:bg-[#3179bc] text-white font-bold p-[8px] rounded font-[DM Sans]"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline w-4 h-4 me-3 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Loading...
                                    </>
                                ) : (
                                    "Submit"
                                )}

                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-4 font-[DM Sans]">
                            Already have an account?{" "}
                            <Link to="/" className="text-[#3179bc] hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}