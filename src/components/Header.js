import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  
  span+span {
    margin-left: 2rem;
  }
`;

const Header =()=>{
  return(
    <HeaderBlock>
      <div className="title">
        KRyun
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