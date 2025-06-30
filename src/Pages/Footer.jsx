import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-black bg-white shadow-sm border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left side */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">Kawser Ahmed Nihad</h3>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 text-2xl">
                    <a href="mailto:kawserahmednihad@gmail.com" className="hover:text-green-400 transition">
                        <FaEnvelope />
                    </a>
                    <a href="https://github.com/kawser-ahmed-nihad" target="_blank" className="hover:text-green-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" className="hover:text-green-400 transition">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
