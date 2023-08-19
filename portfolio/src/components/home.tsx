import React, { useState, useEffect } from 'react';
import profile from '../profile.jpg'; 
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Home = () => {
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
    <div className="bg-transparent min-h-screen flex items-center justify-center " id="home">
      <div className="max-w-8xl mx-auto p-8 grid grid-cols-3 gap-24 items-center">
        
        <div className="col-span-2">
          <h1 className="text-white text-4xl font-sagona mb-4">
            Hello! 👋 My name is<br />
            <span className="text-5xl font-bold font-sagona ">Oluwatobi Sobola</span>
          </h1>
          <div className="writer">
            <div className="text-white font-sagona writer-text">
              {displayedText}
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:tobiy105@outlook.com" className="text-gray-100 hover:text-gray-900">
              <FaEnvelope className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/oluwatobi-sobola" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <FaLinkedin className="text-gray-100 text-2xl hover:text-gray-900" />
            </a>
            <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-900">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="col-span-1 text-right">
            <div className="border-4 border-orange-400 rounded-full p-0 animate-pulse">
                <img src={profile} className="w-64 h-64 rounded-full shadow-xl" alt="Profile" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
