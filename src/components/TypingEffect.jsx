import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, speed, pauseDuration, className, container }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout;

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (index < text.length-1) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
          startTyping();
        }
      }, speed);
    };

    startTyping();

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [text, speed]);

  return (
    <motion.span
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {displayedText}
    </motion.span>
  );
};

export default TypingEffect;
