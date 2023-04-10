import React from "react";
import styled from "styled-components";





const Section = styled.div`
display: flex;
justify-content: center;
width: 80%;

 @media only screen and (max-width: 768px) {
    width: 100%;
  }

  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div `
display: flex;
align-items: center;
gap: 3em;
    
`;
const Logo = styled.img`
height: 50px;
cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 1.25em;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25em;
`;
const Icon = styled.img`
width: 20px;
cursor: pointer;
`;

const Button = styled.button`
width: 100px;
padding: 0.5em;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`





const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="assets/gneisscode.png"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
            <Button>Hire Me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
