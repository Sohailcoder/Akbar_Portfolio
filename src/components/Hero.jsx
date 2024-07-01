import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:justify-between lg:ml-44">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 lg:pb-16 text-4xl text-center tracking-tight lg:mt-16 lg:text-8xl lg:text-start head"
            >
              SABER MAKES 3D
            </motion.h1>
            <TypingEffect
              text="3 D Character Artist "
              // text="Character Artist"
              speed={200}
              pauseDuration={500}
              className="ml-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-start"
              container={container}
            />
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl pt-2 lg:py-6 font-light ml-2 text-center lg:text-start"
            >
              <div className="mb-[-1.5rem] mt-3">Hi, I am Shaikh Akbar Ali</div><br/>
              <div>
                I am a 3D Character Artist, creating customized 3D characters for games, films, and advertisements.
              </div>
              <div className="flex mt-6 justify-center gap-2 items-center text-sm lg:justify-start">
                <span className="text-5xl lg:text-8xl -mr-3">2</span>
                <span className="text-5xl lg:text-8xl">+</span> 
                <span className="mt-4">Years of experience in<br/> Character Creator 4 and<br/> Unreal Engine</span>
              </div>
            </motion.p>
          </div>
        </div>
        <motion.div className="w-full lg:w-1/2">
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              src={profile}
              alt="profile"
              className="mt-3"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>

  );
}

export default Hero;
