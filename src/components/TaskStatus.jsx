import React from 'react';

const TaskStatus = ({ ticket, onComplete }) => {
    return (
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-800 text-base md:text-lg">{ticket.title}</h3>
            <button
                className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm md:text-base font-medium transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    onComplete(ticket.id);
                }}
            >
                Complete
            </button>
        </div>
    );
};

export default TaskStatus;
