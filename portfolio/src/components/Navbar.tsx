'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutmeSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const skillsSection = document.getElementById('skills'); // Ensure 'skillsSection' is defined
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY;
      const shouldNavbarBeTransparent = scrollPosition <= 200;
      setNavbarTransparent(shouldNavbarBeTransparent);

      if (
        homeSection &&
        aboutmeSection &&
        projectsSection &&
        contactSection &&
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutmeSection.offsetTop
      ) {
        setActiveTab('home');
      } else if (
        aboutmeSection &&
        projectsSection &&
        scrollPosition >= aboutmeSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveTab('about');
      } else if (
        projectsSection &&
        contactSection &&
        skillsSection && // Check if skillsSection exists
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < skillsSection.offsetTop
      ) {
        setActiveTab('projects');
      } else if (
        skillsSection &&
        contactSection &&
        scrollPosition >= skillsSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveTab('skills');
      } else if (
        contactSection &&
        scrollPosition >= contactSection.offsetTop
      ) {
        setActiveTab('contact');
      }
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
      <div className='text-2xl md:text-4xl font-medium'>Oluwatobi Sobola</div>
      <ul className={`gap-10 lg:gap-16 hidden md:flex ${showMobileMenu ? 'hidden' : ''}`}>
        <li>
          <a href="#home" className={`text-2xl text-white ${activeTab === 'home' ? 'font-bold' : ''}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`text-2xl text-white ${activeTab === 'about' ? 'font-bold' : ''}`}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" className={`text-2xl text-white ${activeTab === 'projects' ? 'font-bold' : ''}`}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className={`text-2xl text-white ${activeTab === 'skills' ? 'font-bold' : ''}`}>
            Skills 
          </a>
        </li>
        <li>
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
          <a href="#skills" className={`block text-white text-xl ${activeTab === 'skills' ? 'font-bold' : ''}`}>
            Skills Experience
          </a>
          <a href="#contact" className={`block text-white text-xl ${activeTab === 'contact' ? 'font-bold' : ''}`}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};
