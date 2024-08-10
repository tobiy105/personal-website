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
      title: 'BCFY - Car Buying Assistant App',
      desc: 'An ongoing project developing a serverless car buying assistant app with secure user registration and personalized recommendations.',
      extra_desc: 'This application is built using AWS services like Cognito for secure user management, Lambda for serverless functions, and DynamoDB for data management. The frontend is developed with TypeScript and Angular. The app provides personalized car recommendations based on user preferences, with a focus on continuous improvement through user feedback.',
      imgs: ['/BCFY.webp', '/BCFY-intial-search.webp', '/BCFY-search-result.webp'],
      extra_imgs: ['/BCFY.webp', '/BCFY-intial-search.webp', '/BCFY-search-result.webp', '/BCFY-search-result-2.webp', '/BCFY-search-result-mobile.webp'],
      tags: ['AWS', 'TypeScript', 'Angular', 'DynamoDB', 'S3', 'Cognito'],
    },
    {
      id: 1,
      title: 'ReciPro - Recipe Finder Full Stack Java App',
      desc: 'Java-based full stack app for finding recipes with integrated nutritional information.',
      extra_desc: 'This project involved integrating the Edamam API for recipe searches and nutrient data, implementing secure user login with encrypted passwords, and supporting CRUD operations for user interactions with recipes. The backend was developed with Java Servlets and JDBC, while the frontend utilized React. Comprehensive testing and project management ensured successful delivery.',
      imgs: ['/ReciPro-home.webp', '/ReciPro-liked-recipes.webp', '/ReciPro-show-ingred.webp'],
      extra_imgs: ['/ReciPro-home.webp', '/ReciPro-liked-recipes.webp', '/ReciPro-show-ingred.webp', '/ReciPro-login.webp'],
      tags: ['Java', 'React', 'Edamam API', 'JDBC'],
    },
    {
      id: 2,
      title: 'Cryptic Chat',
      desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      extra_desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      imgs: ['/crypticchat1.webp', '/crypticchat2.webp'],
      extra_imgs: ['/crypticchat1.webp', '/crypticchat2.webp', '/crypticchatmobview.webp', '/crypticchatmobview2.webp'],
      tags: ['Vite', 'Tailwind', 'GraphQL', 'Docker'],
    },
    {
      id: 3,
      title: 'Cinema Website',
      desc: 'A comprehensive web application for booking movie tickets online, complete with seat selection, payment processing, and QR code ticket generation.',
      extra_desc: 'This project allows users to search for movies, reserve seats, purchase tickets online via Stripe, and receive a ticket with a QR code by email. It also supports in-person cash payments and includes admin functions for movie database management and sales data viewing. Developed using Flask with integrations for Stripe, IMDb, and SQLite.',
      imgs: ['/Cinema-home.webp', '/Cinema-tickets.webp', '/Cinema-order.webp', '/Cinema-payemnt.webp'],
      extra_imgs: ['/Cinema-home.webp', '/Cinema_Research.webp', '/Cinema-Researchb.webp', '/Cinema-screen.webp',
        '/Cinema-tickets.webp', '/Cinema-basket.webp', '/Cinema-order.webp', '/Cinema-payemnt.webp', '/Cinema-ticket-pdf.webp'
      ],
      tags: ['Flask', 'SQLite', 'Stripe API', 'IMDb API'],
    },
    {
      id: 4,
      title: 'Robot Biscuit Picker',
      desc: 'A simulation of a robot using a vacuum gripper to pick biscuits from a conveyor belt and place them in a box.',
      extra_desc: 'The robot uses a camera to detect the biscuits and a vacuum gripper to pick them up. The robot is controlled by a ROS node written in C++.',
      imgs: ['/robot_arm.webp', '/robot_arm2.webp', '/robot_arm3.webp'],
      extra_imgs: ['/robot_arm.webp', '/robot_arm2.webp', '/robot_arm3.webp', 
        '/robot_arm4.webp', '/robot_arm5.webp', '/robot_arm6.webp', '/robot_arm7.webp'], 
      tags: ['ROS', 'Gazebo', 'C++', 'Python'],
    },
    {
      id: 5,
      title: 'Web App DevOps Project',
      desc: 'A DevOps-focused project developing and deploying a web application for order management using modern cloud technologies.',
      extra_desc: 'This project involved full-stack development with Flask, HTML, CSS, and JavaScript, integrated with an Azure SQL Database and Azure Key Vault for secure management of credentials. The application was containerized with Docker and deployed on an Azure Kubernetes Service (AKS) cluster using Terraform for Infrastructure as Code (IaC). Monitoring, alerting, and secrets management were implemented to maintain application health.',
      imgs: ['/Order.webp', '/New-Order.webp'],
      extra_imgs: ['/Order.webp', '/New-Order.webp'],
      tags: ['Flask', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      id: 6,
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
