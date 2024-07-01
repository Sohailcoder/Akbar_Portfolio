import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_USER_ID' // Replace with your user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Optionally reset form fields after successful submission
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  // Variants for Framer Motion animations
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className=''>
        
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial="hidden"
      animate="visible"
      variants={variants}
      className="max-w-md mx-auto p-8 rounded-md shadow-md "
      style={{
          background: 'linear-gradient(to right, #4F3BA9, #EF798A)',
        }}
        >
      <motion.label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
        Name
      </motion.label>
      <motion.input
        type="text"
        name="user_name"
        id="user_name"
        className="w-full border-gray-300 rounded-md mt-2 px-3 py-2 focus:outline-none focus:border-blue-500"
        />

      <motion.label htmlFor="user_email" className="block mt-4 text-sm font-medium text-gray-700">
        Email
      </motion.label>
      <motion.input
        type="email"
        name="user_email"
        id="user_email"
        className="w-full border-gray-300 rounded-md mt-2 px-3 py-2 focus:outline-none focus:border-blue-500"
        />

      <motion.label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
        Message
      </motion.label>
      <motion.textarea
        name="message"
        id="message"
        className="w-full border-gray-300 rounded-md mt-2 px-3 py-2 focus:outline-none focus:border-blue-500"
        rows="4"
        />

      <motion.button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md mt-6 px-4 py-2 transition-colors duration-300"
        >
        Send
      </motion.button>
    </motion.form>
    </div>
  );
}

export default Form;
