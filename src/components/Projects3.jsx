import React from 'react';
import './CardComponent.css';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import p10 from '../assets/p10.png';
import p11 from '../assets/p11.png';
import p12 from '../assets/p12.png';
import { motion } from 'framer-motion';

function Projects3() {
  const cards = [
    {
      imgSrc: p11,
      title: "DR JACOB",
      title2: "(UEFN CHARACTER)"
    },
    {
      imgSrc: p12,
      title: "DR JACOB",
      title2: "(UEFN CHARACTER)"
    },
    {
      imgSrc: p4,
      title: "UZUI TENGEN",
      title2: "(HASHIRA)"
    },
    {
      imgSrc: p8,
      title: "UZUI TENGEN",
      title2: "(HASHIRA)"
    },
    {
      imgSrc: p2,
      title: "COMMANDER ORC",
      title2: "(WARCRAFT)"
    },
    {
      imgSrc: p7,
      title: "COMMANDER ORC",
      title2: "(WARCRAFT)"
    },
    {
      imgSrc: p9,
      title: "COMMANDER ORC",
      title2: "(WARCRAFT)"
    },
    {
      imgSrc: p3,
      title: "ISHOWSPEED",
      title2: "(YOUTUBER)"
    },
    {
      imgSrc: p10,
      title: "ISHOWSPEED",
      title2: "(YOUTUBER)"
    },
    {
      imgSrc: p5,
      title: "DRACULA'S BRIDE",
      title2: "(VAN HELSING)"
    },
    {
      imgSrc: p6,
      title: "DRACULA'S BRIDE",
      title2: "(VAN HELSING)"
    },
  ];

  return (
    <>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5 }}
        className='text-4xl mt-5 text-center font-semibold'>
        Projects
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-20 grid place-items-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="card__container grid gap-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {cards.map((card, index) => (
            <article
              key={index}
              className="card__article relative overflow-hidden border border-gray-300 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <motion.img
                src={card.imgSrc}
                alt="image"
                className="card__img w-full h-48 object-cover rounded-t-lg hover:bg-gradient-to-b from-gray-900 to-gray-60"
              />
              <div className="card__data p-2 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-b-lg">
                <h2 className="text-[1.5rem] font-medium text-white mb-3 min-h-[2.5rem] md:min-h-[2rem] md:mb-0 flex items-center justify-center">
                  {card.title}
                </h2>
                <h2 className="text-[1.5rem] font-medium text-white mb-2 min-h-[2.5rem] md:min-h-[5rem] flex items-center justify-center">
                  {card.title2}
                </h2>
              </div>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Projects3;
