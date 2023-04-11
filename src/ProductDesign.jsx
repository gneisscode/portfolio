import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;


const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  animation: bounce 0.3s ease-in-out 2;

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
  width: 150px;
  height: 80px;
`;
const ProductDesign = () => {
  return (
    <Container>
      {/* <Img src="assets/pd.jpg" /> */}
      <LazyLoadImage
        src="assets/pd.jpg"
        width="400"
        height="400"
        alt="Image Alt"
        effect="blur"
        className="lazy"
      />

      <IconWrapper>
        <Icon src="assets/figma-5.svg" />
      </IconWrapper>
    </Container>
  );
}

export default ProductDesign

// <a href="https://www.freepik.com/free-vector/gradient-colored-ui-ux-background_16627359.htm#query=ui%20ux%20design&position=9&from_view=keyword&track=ais">Image by coolvector</a> on Freepik