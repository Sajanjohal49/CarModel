import React from 'react';
import styled from 'styled-components';
import banner from '../carMedia/sky1.1.jpg';

import interior1 from '../carMedia/interior1.jpg';
import interior2 from '../carMedia/interior2.jpg';
import { motion } from 'framer-motion';
const container = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const itemVariants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
    y: -50,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 100,
    // rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.3,
    },
  },
};
const HeroSection = () => {
  return (
    <Wrapper className="sm:mt-12 mx-auto max-w-screen-2xl">
      <Image src={banner} alt="banner" />
      <Text>
        <motion.div
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p className="title" variants={itemVariants}>
            Skyline GT-R
          </motion.p>
        </motion.div>
      </Text>
      <Image2 src={interior1} alt="interior" />
      <Image3 src={interior2} alt="interior" />
    </Wrapper>
  );
};

export default HeroSection;
const Wrapper = styled.div`
  font-size: 60px;
  color: red;
  position: relative;

  .button-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 100%;
  filter: brightness(40%);
`;

const Text = styled.div``;
const Image2 = styled.img`
  /* border-radius: 10px; */
  max-width: 240px;
  position: absolute;
  bottom: -140px;
  border-top: 6px solid brown;
  right: 486px;
  @media (max-width: 814px) {
    max-width: 200px;
    left: 6%;
    bottom: -240px;
  }
  @media (max-width: 514px) {
    max-width: 140px;
    left: 6%;
    bottom: -240px;
  }
`;

const Image3 = styled.img`
  /* border-radius: 10px; */
  max-width: 200px;
  position: absolute;
  border-top: 6px solid brown;
  bottom: -170px;
  right: 256px;
  @media (max-width: 814px) {
    max-width: 200px;
    right: 6%;
    bottom: -254px;
  }
  @media (max-width: 514px) {
    max-width: 140px;
    right: 6%;
    bottom: -254px;
  }
`;
