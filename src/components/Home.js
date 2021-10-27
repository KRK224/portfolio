import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const HomeBlock = styled.div`
  background-color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: white;
  font-size: 3rem;
`;


const Home = ({currentPage})=>{
  return (
    <HomeBlock>
      <Typewriter 
        options={{
          loop: true,
        }}
        onInit={(typewriter)=>{
          typewriter
          .typeString("<strong>안녕하세요!</strong>")
          .pauseFor(2000)
          .deleteAll()
          .typeString("<strong>KRyun 포트폴리오에</strong><br /><strong>오신걸 환영합니다!!</strong>")
          .pauseFor(2000)
          .start();
        }}
      />
      
    </HomeBlock>
  )
};

export default Home;