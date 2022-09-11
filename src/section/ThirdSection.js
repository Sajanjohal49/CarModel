import React from 'react';
import styled from 'styled-components';
import '../style.css';
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
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.7,
    },
  },
};
const ThirdSection = () => {
  return (
    <Wrapper className="m-5 mx-auto max-w-screen-2xl">
      <Text>
        <motion.div
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p
            variants={itemVariants}
            className="p1 text-slate-300 my-3"
          >
            Vision Vehicle
          </motion.p>
          <motion.p variants={itemVariants} className="p2 ">
            The Road to Autonomous Driving
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="p3 text-slate-300"
          >
            "Just like children, self-driving cars also need to learn
            how to behave in real-life road conditions." Mobility is
            on the threshold of a new era.
          </motion.p>
          <motion.p variants={itemVariants} className="p4">
            Unlike its predecessor, the C110 featured a fastback coupe
            shape. Shinichiro Sakurai designed the car as a sport
            vehicle. It was no longer a two-door version of a sedan.
            He took his inspiration from American and European sports
            cars from those times. The front fascia sported a
            dual-headlights system, with four headlamps in individual
            clusters. Nissan didn't put its name on the mesh-grille
            and left only the black and red GT-R badge. From its side,
            the car resembled the fastback shape of the Mustang Mach
            1, with a similar window line but scaled down. Its back
            panel sported only the Skyline nameplate but not the
            company's logo.
          </motion.p>
        </motion.div>
      </Text>
    </Wrapper>
  );
};

export default ThirdSection;
const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 200px auto 200px;

  height: 350px;
  @media (max-width: 1024px) {
    width: 95%;
    margin: 270px auto 180px;
  }
`;
const Text = styled.div`
  .p1 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    @media (max-width: 1024px) {
      margin-top: 10px;
      font-size: 12px;
      padding: 5px 0;
    }
  }
  .p3 {
    padding: 50px 0px;
    font-size: 18px;
    font-weight: 600;
    max-width: 350px;
    @media (max-width: 624px) {
      padding: 30px 0px;
    }
  }
  .p4 {
    position: absolute;
    color: grey;
    bottom: -90px;

    font-weight: 500;
    right: 0px;
    font-size: 12px;
    width: 350px;
    @media (max-width: 624px) {
      position: unset;
    }
  }
`;
