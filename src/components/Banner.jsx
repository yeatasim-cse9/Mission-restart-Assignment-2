import React from 'react';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* In-Progress Box (Purple) */}
            <div className="bg-[#8D58FA] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-48 md:min-h-64 shadow-sm">
                <img
                    src="/vector1.png"
                    alt=""
                    className="absolute left-0 top-0 h-full w-auto object-left object-cover pointer-events-none opacity-60 mix-blend-overlay"
                />
                <img
                    src="/vector1.png"
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto object-right object-cover pointer-events-none opacity-60 mix-blend-overlay scale-x-[-1]"
                />

                <div className="relative z-10 text-center">
                    <p className="text-xl md:text-2xl tracking-tight font-medium opacity-100 mb-1">In-Progress</p>
                    <p className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tabular-nums drop-shadow-sm">{inProgressCount}</p>
                </div>
            </div>

            {/* Resolved Box (Green) */}
            <div className="bg-[#1DA986] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-48 md:min-h-64 shadow-sm">
                <img
                    src="/vector1.png"
                    alt=""
                    className="absolute left-0 top-0 h-full w-auto object-left object-cover pointer-events-none opacity-50 mix-blend-overlay"
                />
                <img
                    src="/vector1.png"
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto object-right object-cover pointer-events-none opacity-50 mix-blend-overlay scale-x-[-1]"
                />

                <div className="relative z-10 text-center">
                    <p className="text-xl md:text-2xl tracking-tight font-medium opacity-100 mb-1">Resolved</p>
                    <p className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tabular-nums drop-shadow-sm">{resolvedCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
