import React, { useEffect } from 'react';
import AOS from 'aos';                    
import { FaReact, FaNodeJs, FaCss3Alt, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const skills = [
        { name: "React JS", icon: <FaReact className="text-blue-500" />, percent: 90 },
        { name: "Node JS", icon: <FaNodeJs className="text-green-600" />, percent: 85 },
        { name: "Express JS", icon: <SiExpress className="text-gray-700" />, percent: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, percent: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, percent: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, percent: 90 },
        { name: "Firebase", icon: <FaFire className="text-orange-500" />, percent: 80 },
    ];

    return (
        <div id='skills' className="max-w-7xl mx-auto mt-16 px-10">
            <h2
                className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 border-b-4 border-green-400 inline-block pb-2"
                data-aos="fade-up"
            >
                Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md p-5 rounded-lg flex items-center gap-4"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <div className="text-3xl">{skill.icon}</div>
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-semibold text-gray-700">{skill.name}</h4>
                                <span className="text-sm text-gray-500">{skill.percent}%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 mt-1 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
