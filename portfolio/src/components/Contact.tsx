import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 

export const Contact = () => {
  return (
    <div className='pt-32 container' id='contact'>
      <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>    
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-8'>

            <h2 className='text-5xl'> Get in touch</h2>
            <p className='text-white'>
              I&apos;m currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, have any questions, or want to say hi, please feel free to call or email me, contact me at my Linkedin, or send me a message by submitting the form.
            </p>

            <div className='flex gap-3 items-center'>
              <FiMail size={30} /> <a href='mailto:tobiy105@outlook.com'>tobiy105@outlook.com</a>
            </div>

            <div className='flex gap-3 items-center'>
              <BsTelephone size={30} /> (+44) 07484286269
            </div>

            <div className='flex space-x-4'>
              {/* Email Icon and Link */}
              <a href='https://linkedin.com/in/oluwatobi-sobola' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-2xl hover:text-gray-800' />
              </a>
              {/* GitHub Icon and Link */}
              <a href='https://github.com/tobiy105' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl hover:text-gray-800' />
              </a>
            </div>

          </div>

          <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <input 
                className='h-[40px] bg-transparent border border-accent rounded-md' 
                type='text' 
                id='name' 
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input 
                className='h-[40px] bg-transparent border border-accent rounded-md' 
                type='text' 
                id='email' 
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='msg'>Message</label>
              <textarea
                className='bg-transparent border border-accent rounded-md' 
                id='msg' 
                rows={8}
              ></textarea>
            </div>

            <button className='bg-gray-700 bg-opacity-40 border border-accent text-white p-2 px-6 rounded-md hover:bg-gray-700'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
};
