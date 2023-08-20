import React from 'react';
import {FiMail} from 'react-icons/fi';
import {BsTelephone} from 'react-icons/bs';
export const Contact = () => {
  return (
    <div className='pt-32 container' id='contact'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>

                <h2 className='text-5xl' data-aos='zoom-in-up'> Get in touch</h2>
                <p className='text-gray-500' data-aos='zoom-in-up'>Contact me at my Linkedin, give me a call, or send me a message by submitting the form.</p>
            
                <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
                    <FiMail size = {30} /> tobiy105@outlook.com
                </div>

                <div className='flex gap-3 items-center' data-aos='zoom-in-up'>
                    <BsTelephone size = {30} /> (+44) 07484286269
                </div>
            
            </div>

            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos='zoom-in-up'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        className='h-[40px] bg-transparent border border-accent rounded-md' 
                        type='text' 
                        id='name' 
                    />
                </div>

                <div className='flex flex-col gap-1' data-aos='zoom-in-up'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        className='h-[40px] bg-transparent border border-accent rounded-md' 
                        type='text' 
                        id='email' 
                    />
                </div>

                <div className='flex flex-col gap-1' data-aos='zoom-in-up'>
                    <label htmlFor='msg'>Message</label>
                    <textarea
                        className='bg-transparent border border-accent rounded-md' 
                        id='msg' 
                        rows={8}
                    ></textarea>
                </div>

                <button className='bg-accent text-white p-2 px-6 rounded-md' data-aos='zoom-in-up'>Send</button>
            </div>
        </div>
    </div>
  )
};
