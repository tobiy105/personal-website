import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='mt-16 py-6 text-center bg-gray-700 bg-opacity-80'>
        <p className='text-white'> © Oluwatobi Sobola | All rights reserved 2023 </p>
      <div className='mt-4 flex items-center justify-center space-x-4'>
        <a href='mailto:tobiy105@outlook.com' className='text-white hover:text-gray-900'>
          <FaEnvelope className='text-lg' /> 
        </a>
        <a href='https://linkedin.com/in/oluwatobi-sobola' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-900'>
          <FaLinkedin className='text-lg' />
        </a>
        <a href='https://github.com/tobiy105' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-900'>
          <FaGithub className='text-lg' />
        </a>
      </div>
    </div>
    
    
  )
}
