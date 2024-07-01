import React, { useRef, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleform = async (e) => {
    e.preventDefault();
    console.log('Sending data:', { name, email, message });
    try {
      const response = await axios.post(
        "http://localhost:4000/api/send",
        { name, email, message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-wrap max-w-6xl mx-auto mt-10 pb-6">
      <ToastContainer position='top-center' />
      {/* Left Side - Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/3 p-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-md shadow-md mb-4 lg:mb-0"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Details</h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center mb-4"
        >
          <MdEmail className='text-3xl text-white' />
          <p className="text-white text-sm ml-2">Email: AKBARALI120ZAFIRA@GMAIL.COM</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center mb-4"
        >
          <MdPhone className='text-3xl text-white' />
          <p className="text-white ml-2">Phone: +91 9136894884</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center"
        >
          <FaAddressBook className='text-3xl text-white' />
          <p className="text-white ml-2">Address: Mumbai, India</p>
        </motion.div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-2/3 p-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Contact Form</h2>
        <motion.form
          onSubmit={handleform}
          ref={form}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <motion.button
              type="submit"
              className="px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:bg-gradient-to-r from-purple-500 to-indigo-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
