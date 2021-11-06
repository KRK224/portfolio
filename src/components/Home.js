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

  @media (max-width: 768px){
    font-size: 1.2rem;
  }
`;


const Home = ()=>{
  return (
    <HomeBlock>
      <Typewriter 
        options={{
          loop: true,

        }}
        onInit={(typewriter)=>{
          typewriter
          .typeString("<strong>안녕하세요!!</strong>")
          .pauseFor(2000)
          .deleteAll()
          .typeString("<strong>꾸준한 프론트엔드 개발자,</strong><br /><strong>김경륜 입니다!</strong>")
          .pauseFor(2000)
          .start();
        }}
      />
      
    </HomeBlock>
  )
};

export default Home;