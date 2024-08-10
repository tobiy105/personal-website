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
    return null;  // Ensure that null is returned if the modal is not open
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
      <div className="relative p-2 w-full max-w-screen-lg mx-auto my-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl sm:text-2xl text-black font-semibold text-center w-full">
              {project.title}
            </h3>
            <button
              className="pb-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">×</span>
            </button>
          </div>
          {/* Content */}
          <div className="relative p-4 sm:p-6 flex-auto text-center">
            {/* Add a div for sliding image */}
            <div className="max-h-[230px] sm:max-h-[360px] relative">
              {/* Slider */}
              <img
                key={currentImageIndex}
                src={project.extra_imgs[currentImageIndex]}
                alt={`Project ${project.title} Image ${currentImageIndex}`}
                className="max-h-[150px] sm:max-h-[300px] rounded mx-auto"
              />
               <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 h-10 rounded-full shadow-lg"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 h-10 rounded-full shadow-lg"
              >
                &rarr;
              </button>
            </div>
            {/* Extra Description */}
            <p className="my-4 text-gray-800 text-sm sm:text-base text-center">{project.extra_desc}</p>
            {/* Tags */}
            <div className="mt-4 flex justify-center flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="tags text-xs sm:text-sm text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
