import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const Img = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 10px;
  animation: bounce 0.3s ease-in-out 2;

  @media only screen and (max-width: 768px) {
    width: 500px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0); /* start at original position */
    }
    50% {
      transform: translateY(-20px); /* move up 20 pixels */
    }
    100% {
      transform: translateY(0); /* move back to original position */
    }
  }
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
    <Img src='assets/wd.jpg'/>
    <IconWrapper>
        <Icon src="assets/css-3.svg" />
        <Icon src="assets/tailwind-css-2.svg" />
        <Icon src="assets/bootstrap-5-1.svg" />
      </IconWrapper>
    </Container>
  )
}

export default WebDesign