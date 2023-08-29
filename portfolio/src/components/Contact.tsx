'use client'

import React, { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { SendEmail } from '../api/SendEmail';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      setIsEmailErrorVisible(true);
      return;
    }

    setIsEmailErrorVisible(false);

    const formDataObject = new FormData();
    formDataObject.append('name', formData.name);
    formDataObject.append('email', formData.email);
    formDataObject.append('msg', formData.msg);

    await SendEmail(formDataObject);

    setFormData({
      name: '',
      email: '',
      msg: '',
    });
    setIsFormSubmitted(false);
  };
  

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
              <a href='mailto:tobiy105@outlook.com' className='text-white hover:text-gray-900'>
                <FaEnvelope className='text-2xl' /> 
              </a> tobiy105@outlook.com
            </div>

            <div className='flex gap-3 items-center'>
            <a href='tel:+447484286269' className='text-white hover:text-gray-900'> {/* Added tel: protocol */}
                <BsTelephone className='text-2xl' />
              </a>{' '}
              (+44) 07484286269
            </div>

            <div className='flex space-x-4'>
              
              <a href='https://linkedin.com/in/oluwatobi-sobola' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-2xl hover:text-gray-800' />
              </a>
             
              <a href='https://github.com/tobiy105' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl hover:text-gray-800' />
              </a>
            </div>

          </div>

          <form className='space-y-8' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <input 
                className='h-[40px] bg-transparent border border-accent rounded-md px-2 py-1' 
                type='text' 
                id='name' 
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                maxLength={50}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input 
                className='h-[40px] bg-transparent border border-accent rounded-md px-2 py-1' 
                type='text' 
                id='email' 
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                maxLength={50}
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='msg'>Message</label>
              <textarea
                className='bg-transparent border border-accent rounded-md px-2 py-1' 
                id='msg' 
                name='msg'
                rows={8}
                value={formData.msg}
                onChange={handleTextareaChange}
                required
                maxLength={500}
              ></textarea>
            </div>

            <button
              className='bg-gray-700 bg-opacity-40 border border-accent text-white p-2 px-6 rounded-md hover:bg-gray-700'
              type='submit'
            >
              Send
            </button>
            {isEmailErrorVisible && (
              <p className="text-red-500">Please enter a valid email address.</p>
            )}
            {isFormSubmitted && <p>Message sent successfully!</p>}
          </form>
          
        </div>
      </div>
    </div>
  )
};
