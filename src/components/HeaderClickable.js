import React, {useState} from 'react';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import { HiX } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";

const HeaderClickableBlock = styled.div`
  .headerContainer{
    position: fixed;
    top: 0;
    /* left: 0; */
    right: 0;
    padding: 1rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    z-index: 3;

    .title, .menu {
      display: none;
    }

    .toolBar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .active {
      display: flex;
      align-items: center;
      button {
        display: flex;
        align-items: center;
        background-color: none;
      }
    }

    .threeBars {
      margin-left: 1rem;
      button {
        display: flex;
        align-items: center;
        background-color: none;
      }
    }
    
    button {
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 1.8rem;
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
      &:hover {
        color: #004ecb;
      }
    }

    button + button {
      margin-left: 2rem;
    }
  }

  .active {
    left: 0;
  }
`;

const HeaderClickable = ({handleBeforePageChange}) =>{

  const [isClicked, setIsClicked] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return (
    <HeaderClickableBlock>
      <div className={isClicked?"headerContainer active":"headerContainer"}>
        <div className={isClicked ?"title active": "title"}>
          <button onClick={()=>{handleBeforePageChange(0)}}>KRyun</button>
        </div>
        <div className="toolBar">
          <div className={isClicked? "menu active": "menu"}>
            <button onClick={()=>{handleBeforePageChange(0)}}>Home</button>
            <button onClick={()=>{handleBeforePageChange(1)}}>Skill Set</button>
            <button onClick={()=>{handleBeforePageChange(2)}}>Projects</button>
            <button onClick={()=>{handleBeforePageChange(3)}}>Contact</button>
          </div>
          <div className="threeBars">
            {isClicked ?
              <button onClick={()=>{setIsClicked(!isClicked)}}><HiX /></button> : 
              <button onClick={()=>{setIsClicked(!isClicked)}}><GoThreeBars/></button>
            }
          </div>
        </div>
      </div>
    </HeaderClickableBlock>
  )
};

export default HeaderClickable;