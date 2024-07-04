'use client'

import React, { useState } from 'react';
import { Heading } from './Heading';
import { Card } from './Card';
import { FaGithub } from 'react-icons/fa';
import ProjectDetailsModal from './ProjectDetailsModal';

interface ProjectData {
    id: number;
    title: string;
    desc: string;
    imgs: string[];
    tags: string[];
    extra_desc: string;
    extra_imgs: string[];
  }

const data: ProjectData[] = [
    {
      id: 0,
      title: 'Cryptic Chat',
      desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      extra_desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      imgs: ['/crypticchat1.webp', '/crypticchat2.webp'],
      extra_imgs: ['/crypticchat1.webp', '/crypticchat2.webp', '/crypticchatmobview.webp', '/crypticchatmobview2.webp'],
      tags: ['Vite', 'Tailwind', 'GraphQL', 'Docker'],
    },
    {
      id: 1,
      title: 'Robot Biscuit Picker',
      desc: 'A simulation of a robot using a vacuum gripper to pick biscuits from a conveyor belt and place them in a box.',
      extra_desc: 'The robot uses a camera to detect the biscuits and a vacuum gripper to pick them up. The robot is controlled by a ROS node written in C++.',
      imgs: ['/biscuit_picker.webp'],
      extra_imgs: ['/biscuit_picker.webp'], // Add additional images if needed
      tags: ['ROS', 'Gazebo', 'C++', 'Python'],
    },
    {
      id: 2,
      title: 'Nba Team Roster',
      desc: 'Webiste that allows you to search for NBA teams and view their roster and stats. Made with API.',
      extra_desc: 'Webiste that allows you to search for NBA teams and view their roster and stats. Made with API.',
      imgs: ['/nba_team_finder.webp'],
      extra_imgs: ['/nba_team_finder.webp'], // Add additional images if needed
      tags: ['Python', 'API', 'HTML', 'SQL'],
    },
  ];
  

export const Projects = () => {


    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className='container pt-32' id='projects'>
      <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>
        <Heading title='My Projects' />
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.map((el) => (
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
