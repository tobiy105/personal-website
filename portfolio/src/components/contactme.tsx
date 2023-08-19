import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className="bg-gray-100 p-4" id="contact">
      <h2 className=" text-2xl font-bold font-sagona mb-2">Contact Me</h2>
      <p>Email: <a href="mailto:tobiy105@outlook.com">tobiy105@outlook.com</a></p>
      <p> Phone: 07484286269</p>
      <div className="mt-4">
        <h3 className="text-lg font-sagona mb-1">Send me a message:</h3>
        <form>
          <div className="mb-2 font-sagona">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border" />
          </div>
          <div className="mb-2 font-sagona">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border" />
          </div>
          <div className="mb-2 font-sagona">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-sagona">Send</button>
        </form>
      </div>
      <div className="text-white mt-4">
        <p className="text-white font-sagona">Connect with me:</p>
        <div className="flex space-x-4">
          <a href="mailto:tobiy105@outlook.com" className="text-white">
            <FaEnvelope className="text-gray-600 text-2xl hover:text-gray-800" /> 
          </a>
          {/* LinkedIn Icon and Link */}
          <a href="https://linkedin.com/in/oluwatobi-sobola" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800" />
          </a>
          {/* GitHub Icon and Link */}
          <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 text-2xl hover:text-gray-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
