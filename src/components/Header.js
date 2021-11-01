import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  position: fixed;
  background-color: white;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  z-index: 1;
  
  span+span {
    margin-left: 2rem;
  }
  
`;

const Header =()=>{
  return(
    <HeaderBlock>
      <div className="title">
        KRyun Portfolio
      </div>
      <div className="menu">
        <span>Home</span>
        <span>Skill Set</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </HeaderBlock>
  )
}

export default Header;