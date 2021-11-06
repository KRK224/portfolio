import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { GoThreeBars } from "react-icons/go";
// import { ImCross } from "react-icons/im";
import { HiX } from "react-icons/hi";

const HeaderBlock = styled.div`
  position: fixed;
  background-color: white;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  z-index: 2;

  .threeBars {
    button {
      display: flex;
      align-items: center;
    }
  }
  
  button {
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;

    &:hover {
      color: #004ecb;
    }
  }

  button+button {
    margin-left: 2rem;
  }

  .scrollableMenu {
    position: absolute;
    top: 10vh;
    left: 0;
    background-color: white;
    opacity: 0.95;
    width: 0%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation-name: appear;
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-fill-mode: both;

    @keyframes appear {
      0% {
        width: 0%;
        opacity: 0;
      }
      100% {
        width: 100%;
        opacity: 0.95;
      }
    }

    button:hover {
      font-weight: 1000;
      color: #004ecb;
    }
    button + button {
      margin-top: 2rem;
    }
  }
`;


const Header =({handleBeforePageChange})=>{

  const [isClicked, setIsClicked] = useState(false);
  
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)'
  })

  useEffect(()=>{
    if(isDesktop){
      if(isClicked){
        setIsClicked(!isClicked);
      }
    };    
    console.log('Hamburg 버튼이 클릭되었습니다.');
    console.log(isClicked);
  },
    [isClicked, isDesktop]
  )

  return(
    <HeaderBlock>
      <div className="title">
        <button onClick={()=>{handleBeforePageChange(0)}}>KRyun</button>
      </div>
      {
        isDesktop ?
      <div className="menu">
        <button onClick={()=>{handleBeforePageChange(0)}}>Home</button>
        <button onClick={()=>{handleBeforePageChange(1)}}>Skill Set</button>
        <button onClick={()=>{handleBeforePageChange(2)}}>Projects</button>
        <button onClick={()=>{handleBeforePageChange(3)}}>Contact</button>
      </div>
        :
      <div className="threeBars">
        {isClicked ? 
        <button onClick={()=>{setIsClicked(!isClicked)}}><HiX /></button> : 
        <button onClick={()=>{setIsClicked(!isClicked)}}><GoThreeBars/></button>}
      </div>  
      }
      {
        isClicked ?
        <div className="scrollableMenu">
          <button onClick={()=>{handleBeforePageChange(0)}}>Home</button>
          <button onClick={()=>{handleBeforePageChange(1)}}>Skill Set</button>
          <button onClick={()=>{handleBeforePageChange(2)}}>Projects</button>
          <button onClick={()=>{handleBeforePageChange(3)}}>Contact</button>
        </div> :
        null
      }
    </HeaderBlock>
  )
}

export default Header;