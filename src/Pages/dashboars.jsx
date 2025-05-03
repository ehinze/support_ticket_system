import React from "react";
import { Link } from "react-router-dom"
import Property from "../Componets/propertity";
const Dashboard = () => {

    return (
        <div>
            <Property />
            <div className="min-h-screen w-full bg-[#bacbef] text-white overflow-hidden">
                <div className="sm:ml-64 p-4">
                    <div className="w-full h-full text-white border-gray-200 rounded-none">
                        <div className="flex mt-20 flex-col gap-6 items-center justify-center px-4 py-10 text-black">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center">
                                Welcome to
                            </h1>
                            <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-center">
                                Your Support Ticket System
                            </h2>

                            <div className="mt-6 text-center">
                                <p className="font-bold text-base md:text-xl">
                                    What you can do here:
                                </p>

                                <div className="mt-4 flex flex-col md:flex-row justify-center gap-4 items-center">
                                    <Link to="/Create">
                                        <button
                                            type="button"
                                            className="px-6 py-3 w-60 text-base font-medium text-white bg-[#3b4794] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        >
                                            Log a complaint
                                        </button>
                                    </Link>

                                    <Link to="/home">
                                        <button
                                            type="button"
                                            className="px-6 py-3 w-60 text-base font-medium text-white bg-[#3b4794] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        >
                                            Track your ticket
                                        </button>
                                    </Link>

                                    <Link to="/inbox">
                                        <button
                                            type="button"
                                            className="px-6 py-3 w-60 text-base font-medium text-white bg-[#3b4794] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        >
                                            Check Notifications
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;
