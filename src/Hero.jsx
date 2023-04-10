import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 80%;
  gap: 1em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const WhoIAm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Line = styled.img`
height: 5px ;
`;


const Subtitle = styled.h2`
  color: #da4ea2;
`;


const Desc = styled.p`
  font-size: 20px;
  color: #3d1c56;
  line-height: 1.5em;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-top: 0.5em;


`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;


const Button = styled.button`
background-color: #da4ea2;
color:white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  /* object-fit: contain; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  border-radius: 100%;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media only screen and (max-width: 375px) {
    width: 150px;
    height: 150px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>React.js Developer</Title>
          <WhoIAm>
            <Line src="assets/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhoIAm>
          <IconWrapper>
            <Icon src="assets/github-icon-1.svg" />
            <Icon src="assets/linkedin-icon.svg" />
            <Icon src="assets/twitter-6.svg" />
          </IconWrapper>
          <Desc>
            Hello! I'm Em and I enjoy creating modern, visually pleasing, and
            responsive websites and web applications.
          </Desc>

          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 150]} scale={1.6}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="assets/pic.jpg" alt="" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
