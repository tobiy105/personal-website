import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
const SlideDownNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-[rgb(4,28,76)] p-4 fixed top-0 w-full flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} className="w-8 h-8 mr-2" alt="Logo" />
        <h1 className="text-white text-lg font-semibold">Oluwatobi Sobola</h1>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#bio" className="text-white">About Me</a></li>
        <li><a href="#projects" className="text-white">Projects</a></li>
        <li><a href="#contact" className="text-white">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default SlideDownNav;
