import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Tagline */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 00-8 0v2H5a2 2 0 00-2 2v6h18v-6a2 2 0 00-2-2h-3V7z" />
                        </svg>
                        Job Hunt
                    </h2>
                    <p className="text-sm">Connecting ambition with opportunity. Powered by AI.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/jobs" className="hover:text-white transition">Find Jobs</a></li>
                        <li><a href="/employers" className="hover:text-white transition">Post a Job</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/blog" className="hover:text-white transition">Career Blog</a></li>
                        <li><a href="/guides" className="hover:text-white transition">Resume Tips</a></li>
                        <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="/support" className="hover:text-white transition">Support</a></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Connect with Us</h3>
                    <p className="text-sm mb-4">
                        jobhunt@support.com<br />
                        +91 9090909090<br />
                    </p>
                    <div className="flex space-x-4 text-gray-400 text-lg">
                        <a href="#" className="hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} Job Hunt. All rights reserved. | Designed with ❤️ by Team JobHunt
            </div>
        </footer>
    );
};

export default Footer;
