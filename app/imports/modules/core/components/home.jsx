import React from 'react';
import styled from 'styled-components';


const HomeBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const HomeTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;


const Home = () => (
  <HomeBase>
    <HomeTitle data-testId="home-title">Lässige Avatar editor</HomeTitle>

  </HomeBase>
);


export default Home;
