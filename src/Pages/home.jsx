import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Property from "../Componets/propertity";

const Home = () => {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Login Issue", status: "Pending", progress: 30 },
        { id: 2, title: "Payment Not Processed", status: "In Review", progress: 60 },
        { id: 3, title: "Bug Report", status: "Resolved", progress: 100 },
    ]);

    const totalTickets = tickets.length;
    const pendingTickets = tickets.filter((t) => t.status === "Pending").length;
    const resolvedTickets = tickets.filter((t) => t.status === "Resolved").length;

    return (
        <div>
            <Property />
            <div className="sm:ml-64 mt-7">
                <div className="bg-[#3b4794] bg-[#bacbef] text-white p-5 border-gray-200 h-181 rounded-lg dark:border-gray-700">
                    <h1 className="text-4xl font-bold pt-10 text-gray-800 mb-4">Welcome! Need Help?</h1>
                    <p className="text-black text-xl font-bold mb-6">Create a ticket and check your progress below.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-700 text-white p-4 rounded-md shadow">
                            <p className="text-lg font-semibold">Total Tickets</p>
                            <p className="text-2xl">{totalTickets}</p>
                        </div>
                        <div className="bg-blue-700 text-white p-4 rounded-md shadow">
                            <p className="text-lg font-semibold">Pending</p>
                            <p className="text-2xl">{pendingTickets}</p>
                        </div>
                        <div className="bg-blue-700 text-white p-4 rounded-md shadow">
                            <p className="text-lg font-semibold">Resolved</p>
                            <p className="text-2xl">{resolvedTickets}</p>
                        </div>
                    </div>

                    <h2 className="text-2xl text-black font-bold mb-4">Ticket Progress</h2>
                    <div className="space-y-4">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="p-4 border rounded-md shadow min-w-[250px]">
                                <p className="font-semibold">{ticket.title}</p>
                                <p className="text-sm text-gray-600">{ticket.status}</p>
                                <div className="w-full bg-gray-200 h-3 rounded-md mt-1">
                                    <div
                                        className={`h-3 rounded-md ${ticket.progress === 100 ? "bg-green-500" : "bg-blue-500"}`}
                                        style={{ width: `${ticket.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}

                        <Link to="/create">
                            <button className="px-6 py-3 bg-blue-600 mt-6 text-white rounded-md hover:bg-blue-700 mx-auto">
                                Create Ticket
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
