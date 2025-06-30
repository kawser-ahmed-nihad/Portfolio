import React from 'react';
import Navbar from '../Pages/Navbar';
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;