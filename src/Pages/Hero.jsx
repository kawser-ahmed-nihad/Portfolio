import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import kawser from '../assets/kawser.png';
import { FaRegFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center mt-16 max-w-7xl mx-auto gap-6 px-4"
      data-aos="fade-up"
    >

      {/* Profile Image */}
      <div
        className="order-1 lg:order-2 flex justify-center lg:justify-start lg:ms-36"
        data-aos="fade-left"
      >
        <div className="w-80 h-80 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src={kawser}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Part */}
      <div
        className="order-2 lg:order-1 px-6 mt-5 space-y-6 text-center lg:text-left"
        data-aos="fade-right"
      >
        <h2 className="font-semibold text-2xl text-black">Kawser Ahmed Nihad</h2>

        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-black">I am a </span>
          <TypeAnimation
            sequence={[
              'Web Developer', 2000,
              'Frontend Developer', 2000,
              'Web Designer', 2000,
              'Full-Stack Developer', 2000,
              'MERN Stack Developer', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-400"
          />
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I'm a full-stack MERN developer focused on building fast, responsive, and efficient web applications. I value clean, maintainable code and love exploring new technologies.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center lg:justify-start gap-6 mt-4 text-2xl text-gray-600">
          <a
            href="https://github.com/kawser-ahmed-nihad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-400 text-black px-5 py-2 rounded-md hover:bg-green-500 hover:text-white transition-all duration-300 mt-6 mx-auto lg:mx-0"
        >
          <FaRegFileAlt />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
