import React, { useEffect } from 'react';
import styled from 'styled-components';
import SkillBar from './SkillBar';
import { AiOutlineQuestionCircle } from "react-icons/ai";


const SkillSetBlock = styled.div`
  padding: 2rem 10rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  .header {
    margin: 3.8rem 1rem 8rem;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .skillSetTitle {
    padding-left: 2rem;
    border-left: solid 0.8rem black;
  }

  .header .skillBarInfo {
    position: relative;

    .skillBarInfoDetail {
      display: none;
    }

    &:hover .skillBarInfoDetail{
      display: block;
      position: absolute;
      top: -4.3rem;
      font-size: 0.5rem;
      background-color: #757575;
      color: white;
      width: 70%;
      left: 10%;
      padding: 8px;
      border-radius: 6px;

      & > div{
        margin-bottom: 2px;
      }
      & > div:last-child {
        margin: 0;
      }
      &::after {
        position: absolute;
        content:"";
        top: 4.8rem;
        left: 60%;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-top-color: #757575;
      }

    }
  }


  .header .skillBarInfo .gridContainer {
  
    display: inline-grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    font-size: 0.5rem;
    margin: 0 2rem;
    grid-gap: 4px 0;

    & > div {
      padding: 0 0.8rem;
      text-align: center;
    }


    & > div:first-child {
      border: none;
      border-radius: 1rem;
      grid-column: 1/5;
      background-color: black;
      position: relative;
      width: 100%;
      background-color: #f0f0f0;
      
      & > span {
        height: 100%;
        width: 20%;
        background: #6665ee;
        position: absolute;
        border-radius: 10px;
        animation-name: progressLoop;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
      }

      @keyframes progressLoop {
        from {
          left: 0%;
        }
        to {
          left: 80%;
        }
      }
      
    }

    & > div:last-child {
      border: none;
      grid-column: 5/6;
      grid-row: 1/4;
      display: flex;
      align-items: center;
      font-size: 1rem;
    }


  }

  .container {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1 1 0;
      margin: 1rem;
    };

    & > div {
      align-self: flex-start;
      position:relative;
      /* border: 3px solid black; */
      border-top: none;
      border-radius: 1.5rem;
      margin: 2rem 0;
      padding: 2rem 0;
      padding-right: 2rem;
      & > span {
        position: absolute;
        top: -2rem;
        display: block;
        font-size: 1.5rem;
        font-weight: 500;
        padding-left: 2rem;
        padding-bottom: 2rem;
      }
    }
  };
`;


const SkillSet = ({active})=>{

  useEffect(()=>{
  },
  [active]);

  return(
  <SkillSetBlock>
    <div className="header">
      <span className="skillSetTitle">Skill Set</span>
      <span className="skillBarInfo">
        <div className="skillBarInfoDetail">
          <div>입문: 사용해본 경험이 있다.</div>
          <div>초급: 디버깅할 때 에러 원인을 파악하는데 시간이 걸린다.</div>
          <div>중급: 디버깅이 수월하다.</div>
          <div>고급: 에러의 가능성을 줄이는 코드를 짠다.</div>
        </div>
        <div className="gridContainer">
          <div>
            <span></span>
          </div>
          <div>입문</div>
          <div>초급</div>
          <div>중급</div>
          <div>고급</div>
          <div>0% - 25%</div>
          <div>25% - 50%</div>
          <div>50% - 75%</div>
          <div>75% - 100%</div>
          <div><AiOutlineQuestionCircle /></div>
        </div>
      </span>
    </div>
    <div className="container">
      <div className="frontEnd">
        <span>#Front End</span>
        <SkillBar skillName="HTML/CSS" percent="75%" active={active}/>
        <SkillBar skillName="React/Redux" percent="50%" active={active}/>
        <SkillBar skillName="Redux-Saga" percent="25%" active={active}/>
      </div>
      <div className="backEnd">
        <span>#Back End</span>
        <SkillBar skillName="Node.js/Koa" percent="25%" active={active}/>
        <SkillBar skillName="MongoDB" percent="25%" active={active}/>
      </div>
      <div className="language">
        <span>#Language</span> 
        <SkillBar skillName="JavaScript" percent="75%" active={active}/>
        <SkillBar skillName="Python" percent="50%" active={active}/>
      </div>
    </div>
  </SkillSetBlock>
  )
};

export default SkillSet;