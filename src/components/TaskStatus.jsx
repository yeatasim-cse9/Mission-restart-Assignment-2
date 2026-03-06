import React from 'react';

const TaskStatus = ({ ticket, onComplete }) => {
    return (
        <div className="bg-white rounded p-4 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-medium text-gray-800 text-sm md:text-base">{ticket.title}</h3>
            <button
                className="w-full py-2 bg-[#00A34A] hover:bg-[#008f40] text-white rounded text-sm font-medium transition-colors"
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
