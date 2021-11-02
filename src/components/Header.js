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
  
  button {
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
  }

  button+button {
    margin-left: 2rem;
  }
  
`;

const Header =({handleBeforePageChange})=>{
  
  
  return(
    <HeaderBlock>
      <div className="title">
        KRyun Portfolio
      </div>
      <div className="menu">
        <button onClick={()=>{handleBeforePageChange(0)}}>Home</button>
        <button onClick={()=>{handleBeforePageChange(1)}}>Skill Set</button>
        <button onClick={()=>{handleBeforePageChange(2)}}>Projects</button>
        <button onClick={()=>{handleBeforePageChange(3)}}>Contact</button>
      </div>
    </HeaderBlock>
  )
}

export default Header;