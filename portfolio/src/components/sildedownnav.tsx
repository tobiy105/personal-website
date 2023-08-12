import React, { useState, useEffect } from 'react';

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
    <nav className="bg-gray-900 p-4 fixed top-0 w-full">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#bio" className="text-white">Bio</a></li>
        <li><a href="#projects" className="text-white">Projects</a></li>
        <li><a href="#contact" className="text-white">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default SlideDownNav;
