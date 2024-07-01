import React from 'react';
import { SiBlender, SiUnrealengine, SiAdobephotoshop } from "react-icons/si";
import { motion } from 'framer-motion';
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import character from "../assets/character.jpg";
import character4 from "../assets/character4.jpg";
import substance from "../assets/substance.jpg";
function Software() {
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType:"reverse",
      },
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: +100 }}
     transition={{ duration: 1.5 }}className='my-20 text-center text-4xl'>
        Softwares
      </motion.h1>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
      <motion.div
          variants={iconVariant(0.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <img src={character4} className='h-[72px] text-7xl text-orange-600' />
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <SiBlender className='text-7xl text-orange-600' />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <SiUnrealengine className='text-7xl' />
        </motion.div>
        <motion.div
          variants={iconVariant(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <SiAdobephotoshop className='text-7xl text-blue-700' />
        </motion.div>
        
        <motion.div
          variants={iconVariant(7.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <SiAdobepremierepro className='text-7xl text-purple-700' />
        </motion.div>
        
        <motion.div
          variants={iconVariant(9.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <SiAdobeaftereffects className='text-7xl text-purple-950' />
        </motion.div>
        <motion.div
          variants={iconVariant(10.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <img src={character} className='h-[72px] text-7xl text-orange-600' />
        </motion.div>
        <motion.div
          variants={iconVariant(11.5)}
          initial="initial"
          animate="animate"

          className='rounded-2xl border-4 border-neutral-800 p-4 mx-4'
        >
          <img src={substance} className='h-[72px] text-7xl text-orange-600' />
        </motion.div>
        
      </div>
    </div>
  );
}

export default Software;
