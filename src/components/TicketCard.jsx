import React from 'react';

const TicketCard = ({ ticket, onStart, isInProgress }) => {
    // Helper to determine the text color based on priority
    const getPriorityStyle = (priority) => {
        switch (priority.toUpperCase()) {
            case 'HIGH PRIORITY':
                return 'text-red-500';
            case 'LOW PRIORITY':
                return 'text-green-500';
            case 'MEDIUM PRIORITY':
                return 'text-yellow-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div
            onClick={() => !isInProgress && onStart(ticket)}
            className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-col justify-between h-full transition-all hover:-translate-y-1 hover:shadow-md ${!isInProgress ? 'cursor-pointer' : 'opacity-80'}`}
        >
            <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-700 leading-snug pr-4">{ticket.title}</h3>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full whitespace-nowrap shrink-0 ${isInProgress ? 'bg-yellow-200 text-gray-800' : 'bg-green-200 text-gray-800'}`}>
                        <span className={`w-2 h-2 rounded-full ${isInProgress ? 'bg-yellow-500' : 'bg-green-600'}`}></span>
                        <span className="text-sm font-medium">{isInProgress ? 'In- Progress' : 'Open'}</span>
                    </div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed tracking-wide">
                    {ticket.description}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs md:text-sm font-medium text-gray-400 mt-auto">
                <div className="flex items-center gap-3">
                    <span>#{ticket.id}</span>
                    <span className={`${getPriorityStyle(ticket.priority)} uppercase tracking-wider`}>
                        {ticket.priority}
                    </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 justify-between sm:justify-end">
                    <span className="capitalize text-gray-500">
                        {ticket.submitter}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {ticket.date}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
