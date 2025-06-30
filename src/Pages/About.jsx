import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id='about' className="max-w-7xl mx-auto mt-20 px-10">
            <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-green-400 inline-block pb-2"
                data-aos="fade-up"
            >
                About Me
            </h2>

            <div className="mt-6 flex flex-col lg:flex-row items-center gap-8" data-aos="fade-up" data-aos-delay="200">

                <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    I'm a <span className="font-medium text-green-600">dedicated full-stack MERN developer</span> with a strong passion for building fast, modern, and responsive web applications. I believe in writing clean, maintainable code and continuously improving my skills through real-world projects and learning new technologies.
                    <br /><br />
                    I enjoy solving problems, collaborating with teams, and turning ideas into interactive digital experiences.
                </p>
            </div>
        </div>
    );
};

export default About;
