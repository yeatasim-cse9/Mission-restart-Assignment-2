import React from 'react';

const Navbar = () => {
    return (
        <nav className="py-5 px-6 flex justify-between items-center w-full">
            <div className="flex items-center">
                <span className="text-[22px] font-bold text-gray-900 tracking-tight">CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-8">
                <ul className="hidden lg:flex gap-8 font-normal text-[15px] text-gray-700">
                    <li className="hover:text-black cursor-pointer transition-colors">Home</li>
                    <li className="hover:text-black cursor-pointer transition-colors">FAQ</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Changelog</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Blog</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Download</li>
                    <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
                </ul>
                <button className="px-5 py-2.5 rounded font-medium text-[15px] bg-[#9155FD] text-white hover:bg-[#804bdf] transition-colors flex items-center justify-center gap-2">
                    <span>+</span> New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
