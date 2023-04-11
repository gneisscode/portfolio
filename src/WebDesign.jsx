import React from 'react'
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;


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
  width: 80px;
  height: 80px;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const WebDesign = () => {
  return (
    <Container>
      <LazyLoadImage
        src="assets/wd.jpg"
        width="550"
        height="400"
        alt="Image Alt"
        effect="blur"
        className='lazy'
      />
      <IconWrapper>
        <Icon src="assets/css-3.svg" />
        <Icon src="assets/tailwind-css-2.svg" />
        <Icon src="assets/bootstrap-5-1.svg" />
      </IconWrapper>
    </Container>
  );
}

export default WebDesign