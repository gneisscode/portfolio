import React from 'react'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Text } from "@react-three/drei";
import styled from "styled-components";


const Cube = () => {

   const textRef = useRef();
   useFrame(
     (state) =>
       (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
   );
  return (
    <mesh>
      <boxGeometry/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={2.5} color="#555">
            GneissCodes
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube