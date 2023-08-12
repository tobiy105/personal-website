import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <p className="mt-4">
        Made with ❤️. By Oluwatobi Sobola. Open sourced on
        <a href="https://github.com/tobiy105/personal-website" target="_blank" rel="noopener noreferrer" className="ml-1 text-white">
          <FaGithub className="inline text-lg" /> 
        </a>
      </p>
      <div className="flex items-center justify-center space-x-4">
        <a href="mailto:tobiy105@outlook.com" className="text-white">
          <FaEnvelope className="text-lg" /> 
        </a>
        <a href="https://linkedin.com/in/oluwatobi-sobola" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin className="text-lg" />
        </a>
        <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub className="text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
