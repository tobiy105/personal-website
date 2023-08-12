import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#bio" className="text-white">Bio</a></li> {/* Updated ID */}
        <li><a href="#projects" className="text-white">Projects</a></li> {/* Added Projects link */}
        <li><a href="#contact" className="text-white">Contact Me</a></li> {/* Added Contact Me link */}
      </ul>
    </nav>
  );
};

export default Navigation;