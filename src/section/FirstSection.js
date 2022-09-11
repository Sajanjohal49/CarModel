import React, { useRef } from 'react';
import styled from 'styled-components';
import sky2 from '../carMedia/sky2.jpg';
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
const IntroSection = () => {
  const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <Wrapper className="mx-auto max-w-screen-2xl  ">
      <div className="  px-3 py-2 lg:px-12 lg:py-6">
        <Text ref={ref}>
          <hr />
          <motion.div
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.p
              variants={itemVariants}
              className="p1 text-slate-200 my-1 "
            >
              While you’re researching your next new Nissan, the
              dedicated technicians are making sure it’s got the
              latest innovations in performance, technology and safety
              - built-in.
            </motion.p>
            <motion.p variants={itemVariants} className="para2">
              Developed with the whole vehicle in mind and tailored to
              your skyline Gtr. High quality products that allow yout
              ton easily adapt your Nissan to your requirements
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="p3 text-slate-100"
            >
              <span className="stroke">Nissan</span> Skyline GT-R R34
            </motion.p>
          </motion.div>
        </Text>
        <Image className="" src={sky2} alt="sky2" />
      </div>
    </Wrapper>
  );
};

export default IntroSection;
const Wrapper = styled.div`
  position: relative;
  /* margin: 70px; */

  height: 400px;
  @media (max-width: 1024px) {
    margin: 0px;
  }
`;
const Text = styled.div`
  hr {
    display: block;
    height: 1px;
    border: 0;
    width: 20%;
    border-top: 2px solid #ba4704;
    margin: 0.8em 0;
    padding: 0;
  }
  .p1 {
    max-width: 300px;
    font-size: 13px;
    font-weight: 500;
    @media (max-width: 1024px) {
    }
  }
  .para2 {
    max-width: 300px;
    font-size: 0.676rem;
    font-weight: 900;
    color: #ba4704;
  }
  .p3 {
    max-width: 600px;
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
    .stroke {
      color: white;
      -webkit-text-fill-color: black; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
    }
    @media (max-width: 884px) {
      font-size: 2.56rem;
      padding: 10px 0 15px;
      width: 200px;
    }
    @media (max-width: 647px) {
      font-size: 1.856rem;
      padding-top: 10px;
      width: 200px;
    }
  }
`;
const Image = styled.img`
  display: block;
  margin-top: -336px;
  margin-left: auto;
  width: 40%;
  max-width: 600px;
  height: auto;
  @media (max-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: 30px;
  }
`;
// const Button = styled.button`
//   margin-top: -20%;
//   position: absolute;

//   right: 2%;
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);

//   background: rgb(152, 17, 56);
//   background: linear-gradient(
//     264deg,
//     rgba(152, 17, 56, 0.9867297260701156) 0%,
//     rgba(185, 11, 49, 0.7934524151457458) 100%
//   );
//   border: none;
//   color: white;
//   padding: 1rem 2rem;

//   text-decoration: none;
//   display: inline-block;
//   font-size: 1rem;
//   cursor: pointer;
//   @media (max-width: 1024px) {
//     margin-top: -38%;
//     right: 40%;
//   }
// `;
