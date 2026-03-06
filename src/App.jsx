import React from 'react';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800">
            <header className="bg-white w-full shadow-sm relative z-50">
                <div className="max-w-[1536px] mx-auto">
                    <Navbar />
                </div>
            </header>
        </div>
    );
}

export default App;
