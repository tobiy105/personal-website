'use server'

import React from 'react'
import { Resend } from 'resend'; 
import ContactFormEmail from '@/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email');
  const msg = formData.get('msg');
  //simply server-sid validation
  if (!senderEmail || typeof senderEmail !== 'string') {
    return {
      error: 'Invalid Email',
    };
  };

  if (!msg || typeof msg !== 'string') {
    return {
      error: 'Invalid Message',
    };
  };

  try {
    await resend.emails.send({
      from: 'Contact Form <onborading@resend.dev>',
      to: 'tobiy105@gmail.com',
      subject: 'New message from portfolio',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { message: msg, senderEmail: senderEmail }),
      
    });
  } catch (error) {
    return {
      error: 'Error sending email',
    };
  };

};

