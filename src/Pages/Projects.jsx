import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const projectList = [
    {
      id: 1,
      title: "Plant Care Tracker",
      description: "Mobile-responsive web app to manage indoor/outdoor plant care, tracking watering, health, etc.",
      fullDetails: `
      mobile-responsive web application that helps users manage and monitor the care of their indoor and outdoor plants. Designed for plant lovers, Botanico allows users to track watering schedules, plant health, and more with a clean, user-friendly interface.
      Features: add/update/delete plants, Firebase auth, MongoDB, JWT, and clean UI.`,
      image: project1,
      liveLink: "https://botanico-8fbe0.web.app/",
      demoLink: "https://github.com/kawser-ahmed-nihad/Botanico.git",
    },
    {
      id: 2,
      title: "Social Events Platform",
      description: "Community-driven platform to create and join social development events with secure login.",
      fullDetails: `
      Is a full-stack, mobile-responsive platform that empowers users to create, join, and manage social development events like tree plantations, road cleanups, and donation drives in their local area. It’s designed to encourage active community involvement and social good.
      Login with Firebase, create/join events, filter/search, protected routes, full responsiveness.`,
      image: project2,
      liveLink: "https://servesphere-4fb04.web.app/",
      demoLink: "https://github.com/kawser-ahmed-nihad/ServeSphere.git",
    },
    {
      id: 3,
      title: "App store platform",
      description: "App store platform designed to help users discover, install, and review applications from various categories..",
      fullDetails: `fully responsive app store platform designed to help users discover, install, and review applications from various categories. It brings together trending apps, smart browsing, and real user feedback to offer an engaging and simplified experience.`,
      image: project3,
      liveLink: "https://gorgeous-figolla-bc1175.netlify.app/",
      demoLink: "https://github.com/kawser-ahmed-nihad/appstore.git",
    },
  ];

  const openModal = (project) => {
    setModalData(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setIsOpen(false);
  };

  return (
    <div id='projects' className="max-w-7xl mx-auto px-10 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-green-400 inline-block pb-2 mb-10" data-aos="fade-up">
        Projects
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className="border-2 border-gray-200 rounded-md shadow-sm p-4 flex flex-col md:flex-row items-center gap-6"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img src={project.image} alt={project.title} className="w-40 object-cover h-40 rounded-lg shadow" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition">
                  Live
                </a>
                <button onClick={() => openModal(project)} className="border border-green-500 text-green-700 px-4 py-1.5 rounded hover:bg-green-50 transition">
                  Details
                </button>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded hover:bg-gray-300 transition">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg relative max-h-[90vh] overflow-y-auto sm:px-8 sm:py-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-3xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-center">{modalData.title}</h3>

            {/* Full Description */}
            <p className="text-sm md:text-base text-gray-700 whitespace-pre-line text-justify">
              {modalData.fullDetails}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
