import React from 'react';
import { Heading } from './heading';
import { Card } from './card';
import { FaGithub } from 'react-icons/fa';

const data = [ 
    {
        id: 0,
        title: 'Cryptic Chat',
        desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['Vite', 'Tailwind', 'GraphQL',  'Docker'],
    },

    {
        id: 1,
        title: 'Robot Biscuit Picker ',
        desc: 'A simulation of a robot using a vacuum gripper to pick biscuits from a conveyor belt and place them in a box.',
        img: '/biscuit_picker.webp',
        tags: ['ROS', 'Gazebo', 'C++',  'Python'],
    },

    {
        id: 2,
        title: 'Nba Team Roster',
        desc: 'Webiste that allows you to search for NBA teams and view their roster and stats. Made with API.',
        img: '/nba_team_finder.webp',
        tags: ['Python', 'API', 'HTML', 'SQL'],
    },

];

export const Projects = () => {
  return (
    <div className='container pt-32' id='projects'>
        <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>    
            <Heading title='My Projects'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
            <p className="mt-4 font-sagona text-center">
                You can all my projects on my Github page:
                    <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer" className="ml-1 text-white">
                    <FaGithub className="inline text-lg" /> 
                </a>
            </p>
        </div>
    </div>
  )
};
