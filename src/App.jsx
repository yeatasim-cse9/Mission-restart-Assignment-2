import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800 flex flex-col">
            <header className="bg-white w-full shadow-sm relative z-50">
                <div className="max-w-[1536px] mx-auto">
                    <Navbar />
                </div>
            </header>

            <main className="flex-grow max-w-[1536px] mx-auto w-full px-6 py-6">
                <Banner inProgressCount={0} resolvedCount={0} />
            </main>
        </div>
    );
}

export default App;
