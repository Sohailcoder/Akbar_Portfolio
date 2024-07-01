import React from 'react';
import profile2 from '../assets/profile2.png';
import { animate, motion } from 'framer-motion';

function Aboutus() {
    
  return (
    <div className='border-b text-neutral-200'>
      <h1 className='mt-20 text-center text-4xl'>
        About <span className='text-neutral-600'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center items-center'>
            <motion.img className=" mt-7" src={profile2} alt="profile" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        
        className='w-full lg:w-1/2 mt-7'>
          <div className='flex justify-center  lg:justify-start '>
            <p className='lg:my-20 max-w-xl text-center lg:text-2xl leading-relaxed tracking-wider lg:text-left'>
              Hi, I am a 3D Character Artist, using Character Creator 4 to create custom 3D characters for games, thumbnails, films, cartoons, etc. 
              I also use Unreal Engine 5, Marvelous Designer, ZBrush, Blender, and Substance Painter. Additionally, I edit videos and create thumbnails 
              using Adobe Premiere Pro, Adobe Photoshop, and Adobe After Effects. I enjoy working professionally with clients.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutus;
