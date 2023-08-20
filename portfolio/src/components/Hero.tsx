'use client'

import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 


export const Hero = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const messages = [
    'I am a Software Engineer',
    'I Build Websites, AI and Games',
    'I Solve Problems'
  ];

  const [typingText, setTypingText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingText.length === 0) {
        setTypingText(messages[typingIndex]);
      } else {
        setDisplayedText(displayedText + typingText[0]);
        setTypingText(typingText.substring(1));
      }

      if (typingText.length === 0 && typingIndex === messages.length - 1) {
        setDisplayedText('');
        setTypingIndex(0);
      } else if (typingText.length === 0) {
        setDisplayedText('');
        setTypingIndex(typingIndex + 1);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [typingText, displayedText, typingIndex]);

  return (
    <div className=' min-h-screen bg-cover'>
      
      <Navbar />
      <div className='container grid lg:grid-cols-1 h-[calc(100vh-60px)]' id='home'>
        <div className='text-[80px] sm:text-[130px] font-bold leading-tight flex justify-center items-center flex-col'>
          <h1 className="text-white text-5xl font-sagona mb-4">
            Hello! 
            <span className="text-5xl waving-hand">
              👋
            </span> 
            My name is
            <br />
            <span className="text-5xl font-bold font-sagona ">Oluwatobi Sobola</span>
          </h1>

          <div className="writer h-[5rem]">
            <div className="text-white text-5xl font-sagona writer-text">
              {displayedText}
            </div>
          </div>
          <div className="flex space-x-4 mt-2 h-[5rem]">
            <a href="mailto:tobiy105@outlook.com" className="text-gray-100 hover:text-gray-900">
              <FaEnvelope className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/oluwatobi-sobola" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <FaLinkedin className="text-gray-100 text-4xl hover:text-gray-900" />
            </a>
            <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-900">
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
