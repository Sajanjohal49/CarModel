import React from "react";
import styled from "styled-components";
import banner from "../carMedia/sky1.1.jpg";
import { useRef } from "react";
import '../style.css'
import interior1 from '../carMedia/interior1.jpg'
import interior2 from '../carMedia/interior2.jpg'
const HeroSection = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <Wrapper>
      <div className="button-center">
        <Button onClick={handleClick}>Scroll Down</Button>
      </div>
      

      <Image src={banner}  alt="banner" ref={ref}/>
      <Text>
        <p className="title">
        Gran Turismo
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;AND  SKYLINE
        </p>
       
      </Text>
      <Image2 src={interior1} alt="interior"/>
      <Image3 src={interior2} alt="interior"/>
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

`
const Button = styled.button`
margin-top: -700px;
background-color: #4068bb;
  border: none;
  color: white;
  padding: 15px 32px;
 
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  cursor: pointer;
`;
const Text =styled.div`

`
const Image2=styled.img`
/* border-radius: 10px; */
width:240px;
 position: absolute;
  bottom: -140px;
  border-top:  6px solid brown;
  right: 486px;
`

const Image3=styled.img`
/* border-radius: 10px; */
width:200px;
 position: absolute;
 border-top:  6px solid brown;
  bottom: -170px;
  right: 256px;
`