import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomePage = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = [
      { delay: 300, stage: 1 },
      { delay: 800, stage: 2 },
      { delay: 1300, stage: 3 },
    ];

    sequence.forEach(({ delay, stage }) => {
      setTimeout(() => setStage(stage), delay);
    });

    const finish = setTimeout(() => onComplete(), 2500);
    return () => clearTimeout(finish);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="text-center w-full px-6">
        {/* Stage 1: Identity */}
        <motion.div 
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          className="text-white text-xl tracking-[0.2em] mb-2 font-bold"
        >
          SALWA EKA AFIANI
        </motion.div>

        {/* Stage 2: Role */}
        <motion.div 
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          className="text-stone-500 text-[10px] tracking-[0.5em] uppercase mb-8"
        >
          INFORMATICS ENGINEERING
        </motion.div>

        {/* Stage 3: Loading Line */}
        <div className="flex justify-center">
          <motion.div 
            animate={{ width: stage >= 3 ? "200px" : "0px" }}
            className="h-[1px] bg-white origin-center"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;