import React from 'react';
import { Heading } from './Heading';
import { Card } from './Card';
import { FaGithub } from 'react-icons/fa';

const data = [ 
    {
        id: 0,
        title: 'Cryptic Chat',
        desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        imgs: ['/crypticchat1.webp',
                '/crypticchat2.webp',
                ],
        imgs_exp: ['/crypticchat1.webp',
                '/crypticchat2.webp',
                '/crypticchatmobview.webp',
                '/crypticchatmobview2.webp',
                ],
        tags: ['Vite', 'Tailwind', 'GraphQL',  'Docker'],
    },

    {
        id: 1,
        title: 'Robot Biscuit Picker ',
        desc: 'A simulation of a robot using a vacuum gripper to pick biscuits from a conveyor belt and place them in a box.',
        imgs: ['/biscuit_picker.webp',
                ],
        tags: ['ROS', 'Gazebo', 'C++',  'Python'],
    },

    {
        id: 2,
        title: 'Nba Team Roster',
        desc: 'Webiste that allows you to search for NBA teams and view their roster and stats. Made with API.',
        imgs: ['/nba_team_finder.webp',
                ],
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
                        imgs={el.imgs}
                        tags={el.tags}
                    />
                ))}
            </div>
            <p className="mt-4 font-sagona text-center">
                You can view all of my projects on my Github page:
                    <a href="https://github.com/tobiy105" target="_blank" rel="noopener noreferrer" className="ml-1 text-white hover:text-gray-900">
                    <FaGithub className="inline text-lg" /> 
                </a>
            </p>
        </div>
    </div>
  )
};
