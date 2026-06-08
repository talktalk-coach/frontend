'use client';

import {motion} from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedCard = ({children, delay = 0}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        rotateX: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{once: true}}
      transition={{
        duration: 0.4,
        delay,
        ease: 'easeOut',
      }}>
      {children}
    </motion.div>
  );
};
