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
      const skillsSection = document.getElementById('skills'); 
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY;
      const shouldNavbarBeTransparent = scrollPosition <= 200;
      setNavbarTransparent(shouldNavbarBeTransparent);

      const isInSection = (section: HTMLElement | null, scrollPos: number) => {
        if (section) {
          return (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          );
        }
        return false;
      }
    
      if (isInSection(homeSection, scrollPosition)) {
        setActiveTab('home');
      } else if (isInSection(aboutmeSection, scrollPosition)) {
        setActiveTab('about');
      } else if (isInSection(projectsSection, scrollPosition)) {
        setActiveTab('projects');
      } else if (isInSection(skillsSection, scrollPosition)) {
        setActiveTab('skills');
      } else if (isInSection(contactSection, scrollPosition)) {
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
    <div className={`flex items-center justify-between pt-2 md:pt-4 px-4 py-2 md:py-4 fixed top-0 z-10 w-full ${navbarTransparent ? 'bg-transparent' : 'bg-gray-700 bg-opacity-20'}`}>
      <div className='text-2xl md:text-4xl font-medium'>Oluwatobi Sobola</div>
      <div className="relative md:hidden">
        <AiOutlineMenu className='md:hidden' size={20} onClick={handleMobileMenuClick} />
        {showMobileMenu && (
          <div className={'mt-2 absolute top-full right-12 w-full '}>
            <a href='#home' className={`block text-white text-xl ${activeTab === 'home' ? 'font-bold' : ''}`}>
              Home
            </a>
            <a href='#about' className={`block text-white text-xl ${activeTab === 'about' ? 'font-bold' : ''}`}>
              About Me
            </a>
            <a href='#projects' className={`block text-white text-xl ${activeTab === 'projects' ? 'font-bold' : ''}`}>
              Projects
            </a>
            <a href='#skills' className={`block text-white text-xl ${activeTab === 'skills' ? 'font-bold' : ''}`}>
              Skills
            </a>
            <a href='#contact' className={`block text-white text-xl ${activeTab === 'contact' ? 'font-bold' : ''}`}>
              Contact
            </a>
          </div>
        )}
      </div>
      <ul className={`pt-4 gap-10 lg:gap-16 hidden md:flex ${showMobileMenu ? 'hidden' : ''}`}>
        <li>
          <a href='#home' className={`text-2xl text-white ${activeTab === 'home' ? 'font-bold' : ''}`}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className={`text-2xl text-white ${activeTab === 'about' ? 'font-bold' : ''}`}>
            About Me
          </a>
        </li>
        <li>
          <a href='#projects' className={`text-2xl text-white ${activeTab === 'projects' ? 'font-bold' : ''}`}>
            Projects
          </a>
        </li>
        <li>
          <a href='#skills' className={`text-2xl text-white ${activeTab === 'skills' ? 'font-bold' : ''}`}>
            Skills 
          </a>
        </li>
        <li>
          <a href='#contact' className={`text-2xl text-white ${activeTab === 'contact' ? 'font-bold' : ''}`}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
