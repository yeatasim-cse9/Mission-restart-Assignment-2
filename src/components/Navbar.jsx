import React from 'react';

const Navbar = () => {
    return (
        <nav className="py-5 px-4 md:px-6 flex justify-between items-center w-full">
            <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
                <ul className="hidden lg:flex gap-8 font-normal text-sm xl:text-base text-gray-700">
                    <li className="hover:text-black cursor-pointer transition-colors">Home</li>
                    <li className="hover:text-black cursor-pointer transition-colors">FAQ</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Changelog</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Blog</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Download</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
                </ul>
                <button className="px-4 py-2 md:px-5 md:py-2.5 rounded font-medium text-sm md:text-base bg-[#9155FD] text-white hover:bg-[#804bdf] transition-colors flex items-center justify-center gap-2">
                    <span>+</span> <span className="hidden sm:inline">New Ticket</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
