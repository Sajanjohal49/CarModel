import React from 'react'
import styled from 'styled-components';
import '../style.css'
const ThirdSection = () => {
  return (
   <Wrapper>
<Text>
    <p className="p1">
Vision Vehicle
    </p>
    <p className='p2'>
        The Road to Autonomous Driving

    </p>
    <p className='p3'>
        "Just like children, self-driving cars also need to learn how to behave in real-life road conditions." Mobility is on the threshold of a new era.
    </p>
    <p className="p4">
    Unlike its predecessor, the C110 featured a fastback coupe shape. Shinichiro Sakurai designed the car as a sport vehicle. It was no longer a two-door version of a sedan. He took his inspiration from American and European sports cars from those times. The front fascia sported a dual-headlights system, with four headlamps in individual clusters. Nissan didn't put its name on the mesh-grille and left only the black and red GT-R badge. From its side, the car resembled the fastback shape of the Mustang Mach 1, with a similar window line but scaled down. Its back panel sported only the Skyline nameplate but not the company's logo.

    </p>
</Text>
   </Wrapper>
  )
}

export default ThirdSection;
const Wrapper =styled.div`
position: relative;
width:80%;
margin:200px auto 160px;

height:350px;
`
const Text=styled.div`

.p1{
    font-size:14px;
    text-transform: uppercase;
    font-weight:500;

}
.p3{
    padding: 30px 0px;
    font-size:18px;
    font-weight: 600;
    max-width:350px;
}
.p4{
    position: absolute;
    color:grey; 
   bottom:-90px;
   font-weight: 500;
    right:15%;
    font-size: 12px;
    width:350px;

}
`