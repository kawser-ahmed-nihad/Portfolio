import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import logo from '../assets/K.png';
import { FaRegFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navClass = 'cursor-pointer text-gray-700 hover:text-green-600 transition';
    const activeClass = 'text-green-700 font-semibold underline underline-offset-4';

    return (
        <header className="sticky top-0 bg-white z-50 shadow-sm">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

                <div className="flex items-center gap-2">
                    <img className="w-12" src={logo} alt="logo" />
                    <p className="text-2xl font-bold text-black">
                        <span className="text-green-600">Kawser</span>Ahmed
                    </p>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 font-medium">
                    <li><ScrollLink to="about" smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>About Me</ScrollLink></li>
                    <li><ScrollLink to="skills" smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Skills</ScrollLink></li>
                    <li><ScrollLink to="projects" smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Projects</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Contact</ScrollLink></li>
                </ul>

                {/* Resume Button */}
                <div className="hidden md:block">
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 border border-green-300 text-green-700 px-4 py-2 rounded-md hover:bg-green-50 transition"
                    >
                        <FaRegFileAlt />
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(true)}>
                        <FaBars size={22} />
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {open && (
                <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <img className="w-10" src={logo} alt="logo" />
                        <p className="text-lg font-bold text-black">
                            <span className="text-green-600">Kawser</span>Ahmed
                        </p>
                    </div>
                    <button onClick={() => setOpen(false)}>
                        <FaTimes size={22} />
                    </button>
                </div>

                <ul className="space-y-4 font-medium">
                    <li><ScrollLink to="about" onClick={() => setOpen(false)} smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>About Me</ScrollLink></li>
                    <li><ScrollLink to="skills" onClick={() => setOpen(false)} smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Skills</ScrollLink></li>
                    <li><ScrollLink to="projects" onClick={() => setOpen(false)} smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Projects</ScrollLink></li>
                    <li><ScrollLink to="contact" onClick={() => setOpen(false)} smooth={true} offset={-70} duration={500} activeClass={activeClass} className={navClass}>Contact</ScrollLink></li>
                    <li>
                        <a href="/resume.pdf" download className="flex items-center gap-2 border border-green-300 text-green-700 px-4 py-2 rounded-md hover:bg-green-50 transition">
                            <FaRegFileAlt />
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
