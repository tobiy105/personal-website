import React, { useState, useEffect } from 'react';
import logo from '../logo.png';

const SlideDownNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutmeSection = document.getElementById('aboutme');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (
        homeSection && aboutmeSection && projectsSection && contactSection &&
        window.scrollY >= homeSection.offsetTop &&
        window.scrollY < aboutmeSection.offsetTop
      ) {
        setActiveTab('home');
      } else if (
        homeSection && aboutmeSection && projectsSection &&
        window.scrollY >= aboutmeSection.offsetTop &&
        window.scrollY < projectsSection.offsetTop
      ) {
        setActiveTab('aboutme');
      } else if (
        aboutmeSection && projectsSection && contactSection &&
        window.scrollY >= projectsSection.offsetTop &&
        window.scrollY < contactSection.offsetTop
      ) {
        setActiveTab('projects');
      } else if (
        contactSection &&
        window.scrollY >= contactSection.offsetTop
      ) {
        setActiveTab('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full flex items-center justify-between z-10"> {/* Add z-10 to ensure the navbar stays on top */}
      <div className="flex items-center">
        <img src={logo} className="w-8 h-8 mr-2" alt="Logo" />
        <h1 className="text-white text-lg font-semibold">Oluwatobi Sobola</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className={`text-white ${activeTab === 'home' ? 'font-semibold' : ''}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" className={`text-white ${activeTab === 'aboutme' ? 'font-semibold' : ''}`}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" className={`text-white ${activeTab === 'projects' ? 'font-semibold' : ''}`}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={`text-white ${activeTab === 'contact' ? 'font-semibold' : ''}`}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SlideDownNav;
