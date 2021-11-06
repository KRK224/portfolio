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
    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    z-index: 3;

    @media (max-width: 1024px){
      padding: 1rem 2rem;
    }
    @media (max-width: 768px){
      padding: 1rem;
      .title button {
        font-size: 1.2rem;
      }

      .scrollableMenu button {
        font-size: 1.2rem;
      }

      .threeBars button{
        font-size: 1.2rem;
      }


    }

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
        position: relative;
        display: flex;
        align-items: center;
        background-color: none;
        z-index: 5;
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

    button + button {
      margin-left: 2rem;
    }
  }

  .active {
    left: 0;
  }



  .scrollableMenu {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #efefef;
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
        opacity: 0.9;
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

const HeaderClickable = ({handleBeforePageChange}) =>{

  const [isClicked, setIsClicked] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  return (
    <HeaderClickableBlock>
      <div className={isClicked? "headerContainer active" : "headerContainer"}>
        <div className={isClicked ? "title active": "title"}>
          <button onClick={()=>{handleBeforePageChange(0)}}>KRyun</button>
        </div>
        <div className="toolBar">
          <div className={isDesktop? (isClicked? "menu active": "menu"): "menu"}>
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
        {
          isDesktop ? null:
          (isClicked ?
            <div className="scrollableMenu">
              <button onClick={()=>{handleBeforePageChange(0)}}>Home</button>
              <button onClick={()=>{handleBeforePageChange(1)}}>Skill Set</button>
              <button onClick={()=>{handleBeforePageChange(2)}}>Projects</button>
              <button onClick={()=>{handleBeforePageChange(3)}}>Contact</button>
            </div> :
          null)
        }
      </div>
    </HeaderClickableBlock>
  )
};

export default HeaderClickable;