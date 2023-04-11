import { useState } from 'react'
import './App.css'
import React from "react";
import styled from 'styled-components'
import Hero from './Hero';
import What from './What';
import Works from './Works';
import Contact from './Contact';
import bg from "/assets/bg.jpeg";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: #beddbe;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: #3d1c56;

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <What />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;


