import React from 'react';

const TicketCard = ({ ticket, onStart, isInProgress }) => {
    // Helper to determine the text color based on priority
    const getPriorityStyle = (priority) => {
        switch (priority.toUpperCase()) {
            case 'HIGH PRIORITY':
                return 'text-[#ea4335]';
            case 'LOW PRIORITY':
                return 'text-[#00A34A]';
            case 'MEDIUM PRIORITY':
                return 'text-[#ffc107]';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">{ticket.title}</h3>
                    <div className="flex items-center gap-1.5 bg-[#eaf7f1] text-[#00A34A] px-2.5 py-1 rounded-full whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-[#00A34A]"></span>
                        <span className="text-xs font-medium">Open</span>
                    </div>
                </div>

                <p className="text-gray-500 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                    {ticket.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        #{ticket.id}
                    </span>
                    <span className={getPriorityStyle(ticket.priority)}>
                        {ticket.priority}
                    </span>
                    <span className="capitalize normal-case text-gray-500">
                        {ticket.submitter}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 normal-case ml-auto">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {ticket.date}
                    </span>
                </div>
            </div>

            <button
                disabled={isInProgress}
                onClick={() => onStart(ticket)}
                className={`w-full py-2.5 rounded text-sm md:text-base font-medium transition-colors ${isInProgress
                    ? 'bg-[#ffeaa7] text-[#fdcb6e] cursor-not-allowed shadow-none'
                    : 'bg-[#ffedb3] text-[#f39c12] hover:bg-[#ffe38a]'
                    }`}
            >
                <span className="flex items-center justify-center gap-2">
                    {isInProgress ? (
                        <>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#f39c12]"></span>
                            In- Progress
                        </>
                    ) : (
                        'Start Task'
                    )}
                </span>
            </button>
        </div>
    );
};

export default TicketCard;
