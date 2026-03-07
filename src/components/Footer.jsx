import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-16 pb-12 px-6 lg:px-12 xl:px-24 w-full">
            <div className="max-w-screen-2xl mx-auto">
                {/* Main Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
                    {/* Brand & Description */}
                    <div className="lg:col-span-2 pr-0 lg:pr-10">
                        <h3 className="text-xl font-bold mb-6 tracking-wide">Customer Support Zone</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A streamlined customer support ticketing system designed to help you organize, track, and resolve customer issues efficiently. Providing better support, one ticket at a time.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h4 className="text-base font-semibold mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-1">
                        <h4 className="text-base font-semibold mb-6">Services</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="lg:col-span-1">
                        <h4 className="text-base font-semibold mb-6">Information</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-base font-semibold mb-6">Social Links</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li>
                                <a href="https://github.com/yeatasim-cse9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center bg-[#E5E7EB] text-black rounded-full shrink-0 group-hover:bg-white transition-colors">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </span>
                                    <span>@yeatasim-cse9</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yeatasim-cse9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center bg-[#E5E7EB] text-black rounded-full shrink-0 group-hover:bg-white transition-colors">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </span>
                                    <span>@yeatasim-cse9</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yeatasim-cse9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center bg-[#E5E7EB] text-black rounded-full shrink-0 group-hover:bg-white transition-colors">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span>@yeatasim-cse9</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yeatasim-cse9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center bg-[#E5E7EB] text-black rounded-full shrink-0 group-hover:bg-white transition-colors">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                                            <path fillRule="evenodd" d="M2 5.5v13a2 2 0 002 2h16a2 2 0 002-2v-13a2 2 0 00-2-2H4a2 2 0 00-2 2zm16.711.222L12 11.667 5.289 5.722A.996.996 0 016 5.5h12c.26 0 .506.096.711.222zM4.053 6.94l7.284 6.474a1 1 0 001.326 0l7.284-6.474a.997.997 0 01.053.31v11a.999.999 0 01-1 1H5a.999.999 0 01-1-1v-11c0-.11.02-.213.053-.31z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span>support@customersupportzone.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider and Copyright */}
                <div className="border-t border-[#1a1a1a] pt-8 flex flex-col items-center">
                    <p className="text-[#a1a1aa] text-sm">
                        © {new Date().getFullYear()} Customer Support Zone. Built by yeatasim-cse9.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
