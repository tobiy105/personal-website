'use client'

import React, { useState } from 'react';
import { Heading } from './Heading';

interface SkillProgressBarProps {
  skillName: string;
  percentage: number;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skillName, percentage }) => {
  return (
    <div className="mb-4 w-full md:w-1/2">
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium">{skillName}</span>
      </div>
      <div className="h-3 bg-gray-300 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
export const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical');

  return (
    <div className="container pt-32" id="skills">
      <div className="bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md">
        <Heading title="Skills" />

        <div className="mt-6">
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                className={`text-lg ${
                  activeTab === 'Technical' ? 'text-white' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('Technical')}
              >
                Technical Skills
              </button>
              <button
                className={`text-lg ${
                  activeTab === 'Soft' ? 'text-white' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('Soft')}
              >
                Soft Skills
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
              {activeTab === 'Technical' && (
                <>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Python" percentage={85} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="SQL" percentage={75} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Javascript" percentage={75} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="C/C++" percentage={70} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="HTML/CSS" percentage={75} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Java" percentage={60} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Data Structures" percentage={85} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Typescript" percentage={70} />
                  </div>
                </>
              )}

              {activeTab === 'Soft' && (
                <>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Goal-Oriented" percentage={80} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Collaboration" percentage={85} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Positivity" percentage={80} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Adaptability" percentage={80} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Problem Solving" percentage={75} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Empathy" percentage={90} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Organization" percentage={85} />
                  </div>
                  <div className="flex justify-center">
                  <SkillProgressBar skillName="Creativity" percentage={90} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

