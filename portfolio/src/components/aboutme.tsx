import React from 'react';
import profile from '../profile.jpg';

const aboutme = () => {
  return (
    
    <div className="bg-gray-100 p-4" id="aboutme">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold font-sagona mb-2">About Me</h2>
          <p>
          Enthusiastic and hardworking computer programmer skilled in C++, Python, and JavaScript, with expertise in software development tools and technologies such as Git and Visual Studio Code. Passionate about continuous learning and development.
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <img src={profile} className="w-32 h-32 rounded-full mx-auto" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default aboutme;
