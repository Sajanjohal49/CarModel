import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../carMedia/mainImage3.jpg';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const MainSection = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto  ">
      <img className="mx-auto " src={mainImage} alt="main" />

      <motion.div className="absolute top-1/2 left-[10%]     ">
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeIn',
            duration: 0.4,
            delay: 0.3,
            type: 'spring',
            stiffness: 30,
          }}
          className=" text-xl lg:text-5xl text-slate-50 font-extralight  uppercase"
        >
          Gran Turismo
        </motion.h1>
        <Link to="/models/1">
          <motion.button
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 0.1,
              delay: 0,
              type: 'spring',
              stiffness: 30,
            }}
            className=" "
          >
            <Button />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default MainSection;
