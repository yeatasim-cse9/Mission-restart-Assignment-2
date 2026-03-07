import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

import initialTickets from './tickets.json';

function App() {
    const [tickets, setTickets] = useState(initialTickets);
    const [inProgress, setInProgress] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const startTask = (ticket) => {
        if (inProgress.find(t => t.id === ticket.id)) {
            toast.info('Task is already in progress!');
            return;
        }
        toast.success('Task Added to Task Status!');
        setInProgress([...inProgress, ticket]);
    };

    const completeTask = (ticketId) => {
        const ticketToResolve = inProgress.find(t => t.id === ticketId);
        toast.success('Task Completed!');
        setInProgress(inProgress.filter(t => t.id !== ticketId));
        setResolvedTasks([...resolvedTasks, ticketToResolve]);
        setTickets(tickets.filter(t => t.id !== ticketId));
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
            <header className="bg-white w-full shadow-sm relative z-50">
                <div className="max-w-screen-2xl mx-auto">
                    <Navbar />
                </div>
            </header>

            <main className="flex-grow max-w-screen-2xl mx-auto w-full px-4 sm:px-6 py-6">
                <Banner inProgressCount={inProgress.length} resolvedCount={resolvedTasks.length} />

                <div className="flex flex-col lg:flex-row gap-8 mt-6 pb-20">
                    {/* Main Section: Ticket Cards */}
                    <section className="w-full lg:w-2/3">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-6 tracking-wide">Customer Tickets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tickets.length > 0 ? (
                                tickets.map(ticket => (
                                    <TicketCard
                                        key={ticket.id}
                                        ticket={ticket}
                                        onStart={startTask}
                                        isInProgress={!!inProgress.find(t => t.id === ticket.id)}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center text-[#5f6368] bg-white rounded-xl shadow-sm border border-gray-100">
                                    <p className="text-sm sm:text-base">All tickets are resolved. Great job!</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Task Status Section */}
                    <aside className="w-full lg:w-1/3 pt-2 lg:pt-0">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 tracking-wide">Task Status</h2>
                        <p className="text-gray-500 mb-6 text-sm lg:text-base">Select a ticket to add to Task Status</p>
                        <div className="mb-10">
                            {inProgress.length > 0 ? (
                                <div className="space-y-4">
                                    {inProgress.map(ticket => (
                                        <TaskStatus
                                            key={ticket.id}
                                            ticket={ticket}
                                            onComplete={completeTask}
                                        />
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 tracking-wide">Resolved Task</h2>
                        <div>
                            {resolvedTasks.length > 0 ? (
                                <div className="space-y-4">
                                    {resolvedTasks.map(ticket => (
                                        <div key={ticket.id} className="bg-indigo-100 rounded-md p-4 shadow-sm border-none">
                                            <span className="text-indigo-900 font-medium text-sm lg:text-base">{ticket.title}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 text-sm lg:text-base">No resolved tasks yet.</p>
                            )}
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />

            <ToastContainer position="top-right" autoClose={3000} theme="light" />
        </div>
    );
}

export default App;
