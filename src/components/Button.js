import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';

const textMotion = {
  rest: {
    color: '#393a3b',
    x: 8,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: '#323333',
    x: -2,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const slashMotion = {
  rest: {
    opacity: 0,
    x: -2,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
  },
  hover: {
    opacity: 1,
    x: 6,

    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const Button = () => {
  return (
    <Container
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group      bg-white py-0.5 lg:py-2 px-2 lg:px-5   uppercase rounded-full  mt-1 lg:mt-4 flex space-x-1 items-center"
    >
      <motion.h1
        variants={textMotion}
        className="text-[10px]   font-medium lg:text-base"
      >
        Discover Now
      </motion.h1>
      <SlashContainer variants={slashMotion}>
        <AiOutlineArrowRight
          size="1.3rem"
          className=" text-slate-700  text-sm "
        />
      </SlashContainer>
    </Container>
  );
};
export default Button;

const Container = styled(motion.div)`
  cursor: pointer;
`;

const SlashContainer = styled(motion.div)``;
