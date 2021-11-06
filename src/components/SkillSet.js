import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SkillBar from './SkillBar';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {useMediaQuery} from 'react-responsive';


const SkillSetBlock = styled.div`
  padding: 2rem 8rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1024px){
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    .header {
      .skillSetTitle{
        font-size: 1.2rem;
      }
    }
  }

  .header {
    margin: 3rem 1rem 6rem;
    font-size: 1.8rem;
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

  
  .buttonContainer {
    padding: 0 2rem;
    button {
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
      outline: 0;
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 1rem;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: black;
      border: 2px solid #6766ee;
      :hover {
          color: #fff;
          background-color: #6766ee;
          border-color: #6766ee;
      }
    }
    button + button {
        margin-left: 2rem;
    }

    .clickedButton {
      color: #fff;
      background-color: #6766ee;
      border-color: #6766ee;
    }

    @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      button {
        font-size: 0.8rem;
      }
      button + button {
        margin-top: 0.8rem;
        margin-left: 0;
      }
    }
  }

  .skillSetContainer {
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
  }
  .inActive {
    display: none;
  }
`;


const SkillSet = ({active})=>{
  
  const [isClicked, setIsClicked] = useState([true, false, false]);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })


  useEffect(()=>{
  },
  [active]);

  return(
  <SkillSetBlock>
    <div className="header">
      <span className="skillSetTitle">Skill Set</span>
      <span className={isMobile?"skillBarInfo inActive": "skillBarInfo"}>
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
    <div className={isDesktop? "buttonContainer inActive": "buttonContainer"}>
      <button onClick={()=>{setIsClicked([true, false, false])}} className={isClicked[0]?"clickedButton":null}>#Front End</button>
      <button onClick={()=>{setIsClicked([false, false, true])}} className={isClicked[2]?"clickedButton":null}>#Language</button>
      <button onClick={()=>{setIsClicked([false, true, false])}} className={isClicked[1]?"clickedButton":null}>#Back End</button>
    </div>
    <div className="skillSetContainer">
      <div className={isDesktop?"frontEnd":(isClicked[0]?"frontEnd":"frontEnd inActive")}>
        {isDesktop?<span>#Front End</span>:null}
        <SkillBar skillName="HTML/CSS" percent="75%" active={active} isMobile={isMobile} />
        <SkillBar skillName="React/Redux" percent="50%" active={active} isMobile={isMobile} />
        <SkillBar skillName="Redux-Saga" percent="25%" active={active} isMobile={isMobile} />
      </div>
      <div className={isDesktop?"backEnd":(isClicked[1]?"backEnd":"backEnd inActive")}>
        {isDesktop?<span>#Back End</span>:null}
        <SkillBar skillName="Node.js/Koa" percent="25%" active={active}/>
        <SkillBar skillName="MongoDB" percent="25%" active={active}/>
      </div>
      <div className={isDesktop?"language": (isClicked[2]?"language":"language inActive")}>
        {isDesktop?<span>#Language</span>:null} 
        <SkillBar skillName="JavaScript" percent="75%" active={active}/>
        <SkillBar skillName="Python" percent="50%" active={active}/>
      </div>
    </div>
  </SkillSetBlock>
  )
};

export default SkillSet;