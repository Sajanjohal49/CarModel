import React from "react";
import styled from "styled-components";
import banner from "../carMedia/sky1.1.jpg";

import interior1 from "../carMedia/interior1.jpg";
import interior2 from "../carMedia/interior2.jpg";
const HeroSection = () => {
  return (
    <Wrapper>
      <Image src={banner} alt="banner" />
      <Text>
        <p className="title">
          Gran Turismo
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="para2">AND SKYLINE</span>
        </p>
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

const Text = styled.div`
.para2{
  @media (max-width:1024px) {
    visibility: hidden;
  }
 
}
`;
const Image2 = styled.img`
  /* border-radius: 10px; */
  max-width: 240px;
  position: absolute;
  bottom: -140px;
  border-top: 6px solid brown;
  right: 486px;
  @media (max-width:524px) {
      max-width: 140px;
      left:6%;
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
  @media (max-width:524px) {
      max-width: 140px;
      right:6%;
      bottom:-254px;
    }
`;
