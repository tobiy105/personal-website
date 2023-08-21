'use client'

import React, { useState, useEffect } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

export const Navbar = () => {

  const [activeTab, setActiveTab] = useState('home');
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutmeSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const workSection = document.getElementById('work');
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
        setActiveTab('about');
      } else if (
        aboutmeSection && projectsSection && contactSection &&
        window.scrollY >= projectsSection.offsetTop &&
        window.scrollY < contactSection.offsetTop
      ) {
        setActiveTab('projects');
      } else if (
        projectsSection && contactSection && workSection &&
        window.scrollY >= workSection.offsetTop &&
        window.scrollY < projectsSection.offsetTop
      ) {
        setActiveTab('work');
      } else if (
        workSection &&
        window.scrollY >= workSection.offsetTop
      ) {
        setActiveTab('contact');
      }
      
      const scrollPosition = window.scrollY;
      const shouldNavbarBeTransparent = scrollPosition <= 200; // Adjust this value as needed
      setNavbarTransparent(shouldNavbarBeTransparent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={`pt-8 px-4 py-4 fixed flex justify-between top-0 z-10 w-full ${navbarTransparent ? 'bg-transparent' : 'bg-gray-700 bg-opacity-20'}`}>
      <div className='text-xl md:text-4xl font-medium'>Oluwatobi</div>
      <ul className={`gap-10 lg:gap-16 hidden md:flex ${showMobileMenu ? 'hidden' : ''}`}>
        <li >
          <a href="#home" className={` text-2xl text-white ${activeTab === 'home' ? 'font-bold' : ''}`}>
            Home
          </a>
        </li>
        <li >
          <a href="#about" className={`text-2xl text-white ${activeTab === 'about' ? 'font-bold' : ''}`}>
            About Me
          </a>
        </li>
        <li >
          <a href="#projects" className={`text-2xl text-white ${activeTab === 'projects' ? 'font-bold' : ''}`}>
            Projects
          </a>
        </li>
        <li >
          <a href="#work" className={`text-2xl text-white ${activeTab === 'work' ? 'font-bold' : ''}`}>
            Work Experience
          </a>
        </li>
        <li >
          <a href="#contact" className={`text-2xl text-white ${activeTab === 'contact' ? 'font-bold' : ''}`}>
            Contact
          </a>
        </li>
      </ul>
      <AiOutlineMenu className='md:hidden' size={20} onClick={handleMobileMenuClick} />
      {showMobileMenu && (
        <div className='md:hidden mt-2'>
          <a href="#home" className={`block text-white text-xl ${activeTab === 'home' ? 'font-bold' : ''}`}>
            Home
          </a>
          <a href="#about" className={`block text-white text-xl ${activeTab === 'about' ? 'font-bold' : ''}`}>
            About Me
          </a>
          <a href="#projects" className={`block text-white text-xl ${activeTab === 'projects' ? 'font-bold' : ''}`}>
            Projects
          </a>
          <a href="#work" className={`block text-white text-xl ${activeTab === 'work' ? 'font-bold' : ''}`}>
            Work Experience
          </a>
          <a href="#contact" className={`block text-white text-xl ${activeTab === 'contact' ? 'font-bold' : ''}`}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};
