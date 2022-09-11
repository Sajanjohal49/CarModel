import React from 'react';
import { useParams } from 'react-router-dom';
import modelData from '../components/Data/modelData';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const ModelDetails = () => {
  const { modelId } = useParams();
  const thisModel = modelData.find((model) => model.id === modelId);
  return (
    <motion.div className="  mt-10  md:px-6 xl:px-[20rem] lg:pt-[5rem] mx-auto max-w-screen-2xl ">
      <motion.div
        className=" rounded px-3 lg:px-12 py-2 mx-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={itemVariants} className="text-white">
          {thisModel.name}
        </motion.h1>
        <motion.span variants={itemVariants}>
          <img
            className="mx-auto lg:max-w-xl"
            src={thisModel.image}
            alt="nissan model"
          />
        </motion.span>
        <motion.p
          variants={itemVariants}
          className="text-white text-lg italic font-extralight"
        >
          {' '}
          Price starts from {thisModel.price}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-white font-light py-10"
        >
          {thisModel.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
