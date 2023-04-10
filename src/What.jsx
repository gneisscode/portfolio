import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture} from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Text } from "@react-three/drei";
import Cube from "./Cube";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 80%;

`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #3d1c56;
  line-height: 1.5em;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



const What = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatIDo>
            <Line src="assets/line.png" />
            <Subtitle>What I do</Subtitle>
          </WhatIDo>
          <Desc>
            I draw from a diverse set of tools and technologies to provide my clients with 'outside-the-box' solutions that are effective, efficient, and well-tailored to their needs.
          </Desc>
          <Button>My Services</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default What;
