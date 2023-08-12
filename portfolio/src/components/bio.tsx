import React from 'react';
import profile from '../profile.jpg';

const Bio = () => {
  return (
    <div className="bg-gray-100 p-4" id="bio">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Bio</h2>
          <p>
            Your bio content goes here. You can talk about your background, skills, and experiences.
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <img src={profile} className="w-32 h-32 rounded-full mx-auto" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
