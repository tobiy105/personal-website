'use client'

import React, { useState } from 'react';
import { Heading } from './Heading';
import { Card } from './Card';
import { FaGithub } from 'react-icons/fa';
import ProjectDetailsModal from './ProjectDetailsModal';
import { data, ProjectData } from './Data';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const openModal = (project: ProjectData) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    const visibleProjects = showAll ? data : data.slice(0, 3);

    return (
        <div className='container pt-32' id='projects'>
            <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>
                <Heading title='My Projects' />
                <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {visibleProjects.map((el) => (
                        <Card
                            key={el.id}
                            title={el.title}
                            desc={el.desc}
                            imgs={el.imgs}
                            tags={el.tags}
                            extra_desc={el.extra_desc}
                            extra_imgs={el.extra_imgs}
                            onReadMoreClick={() => openModal(el)}
                        />
                    ))}
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-gray-700 bg-opacity-40 border border-accent text-white p-2 px-6 rounded-md hover:bg-gray-700"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
                <p className="mt-4 font-sagona text-center">
                    You can view all of my projects on my Github page:
                    <a
                        href="https://github.com/tobiy105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-white hover:text-gray-900"
                    >
                        <FaGithub className="inline text-lg" />
                    </a>
                </p>
            </div>
            <ProjectDetailsModal
                project={selectedProject || undefined}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
};
