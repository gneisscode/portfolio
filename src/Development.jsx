import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

`;



// const Img = styled.img`
//   width: 400px;
//   height: 400px;
//   border-radius: 10px;
//   animation: bounce 0.3s ease-in-out 2;

//   @keyframes bounce {
//     0% {
//       transform: translateY(0); /* start at original position */
//     }
//     50% {
//       transform: translateY(-20px); /* move up 20 pixels */
//     }
//     100% {
//       transform: translateY(0); /* move back to original position */
//     }
//   }
// `;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

   @media only screen and (max-width: 768px) {
   margin-bottom: 2em;
   }

`;

const Icon = styled.img`
  width: 60px;
  height: 60px;

  @media only screen and (max-width: 768px) {
    width: 30px;
    height:30px;
  }
`;

const Development = () => {
  return (
    <Container>
      {/* <Img src="assets/dev.jpg" /> */}
      <LazyLoadImage
        src="assets/dev.jpg"
        width="400"
        height="400"
        alt="Image Alt"
        effect="blur"
        className="lazy"
      />

      <IconWrapper>
        <Icon src="assets/javascript-1.svg" />
        <Icon src="assets/react-1.svg" />
        <Icon src="assets/typescript.svg" />
        <Icon src="assets/nodejs-1.svg" />
        <Icon src="assets/html-1.svg" />
        <Icon src="assets/vitejs.svg" />
        <Icon src="assets/webpack.svg" />
      </IconWrapper>
    </Container>
  );
};

export default Development;

//<a href="https://www.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development-vector-isolated-concept-metaphor-illustration_12083314.htm#query=javascript%20developer%20female&position=48&from_view=search&track=ais">Image by vectorjuice</a> on Freepik