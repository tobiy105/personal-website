import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 p-4" id="projects">
      <h2 className="text-2xl font-bold font-sagona mb-2">Projects</h2>
      <div className="flex flex-wrap -mx-2">
        {/* Project 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
          <div className="border p-4">
            {/* Project Image (Replace src with your image path) */}
            <img src="project1-image.jpg" className="w-full mb-2" alt="Project 1" />
            <h3 className=" text-lg font-sagona mb-1">Project 1</h3>
            <p>Project description goes here.</p>
          </div>
        </div>
        {/* Add more project placeholders */}
      </div>
    </div>
  );
};

export default Projects;
