// ProjectDetailsModal.tsx

import React, { useState } from 'react';

interface ProjectDetailsModalProps {
  project?: {
    title: string;
    desc: string;
    extra_desc: string;
    extra_imgs: string[];
    tags: string[];
  };
  onClose: () => void;
  isOpen: boolean;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  isOpen,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.extra_imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.extra_imgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative p-2 w-full max-w-screen-lg mx-auto my-6 sm:w-3/4">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl text-black font-semibold">{project.title}</h3>
            <button
              className="pb-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">×</span>
            </button>
          </div>
          {/* Content */}
          <div className="relative p-6 flex-auto">
            {/* Add a div for sliding image */}
            <div className="max-h-[360px] relative">
              {/* Slider */}
              <img
                key={currentImageIndex}
                src={project.extra_imgs[currentImageIndex]}
                alt={`Project ${project.title} Image ${currentImageIndex}`}
                className="max-h-[156px] rounded mx-auto"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 bg-opacity-60 p-2 w-10 h-10 rounded-full"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 bg-opacity-60 p-2 w-10 h-10  rounded-full"
              >
                &rarr;
              </button>
            </div>
            {/* Extra Description */}
            <p className="my-4 text-gray-800">{project.extra_desc}</p>
            {/* Tags */}
            <div className="mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="tags"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
