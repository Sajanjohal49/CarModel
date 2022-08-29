import React from "react";
import styled from "styled-components";
import sky2 from '../carMedia/sky2.jpg'

const IntroSection = () => {
  return (
    <Wrapper>
      <Text>
        <hr />
        <p className="p1">
          With more than 20 Years of knowledge and experience,Genuine
          Accessories always stands for quality
        </p>
        <p className="p2">
          Developed with the whole vehicle in mind and tailored to your skyline
          Gtr. High quality products that allow yout ton easily adapt your
          Nissan to your requirements
        </p>
    <p className="p3">
    <span className="stroke">Nissan</span> Skyline GT-R R34 
    </p>
      </Text>
      <Image src={sky2} alt='sky2'/>
    </Wrapper>
  );
};

export default IntroSection;
const Wrapper = styled.div`
position: relative;
margin:70px;
`;
const Text = styled.div`
margin-left: 5%;
  hr {
    display: block;
    height: 1px;
    border: 0;
    width: 20%;
    border-top: 2px solid #ba4704;
    margin: 1em 0;
    padding: 0;
  }
  .p1 {
    max-width: 300px;
    font-size: 13px;
    font-weight: 500;
  }
  .p2{
    max-width: 300px;
    font-size: 12px;
  }
  .p3{
max-width: 600px;
font-size: 70px;
font-weight: 600;
text-transform: uppercase;
.stroke{
    color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
  }
`;
const Image=styled.img`
display: block;
margin-top: -400px;
     margin-left: auto;

`
