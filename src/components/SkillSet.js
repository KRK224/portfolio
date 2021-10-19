import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkillSetBlock = styled.div`
  padding: 2rem;
  height: 100vh;
  width: 100%;

  .header {
    margin: 2rem 1rem 4rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .header span {
    padding-left: 2rem;
    border-left: solid 0.8rem black;
  }
  .container {
    display: flex;
    justify-content: space-between;
    
    div {
      flex: 1 1 0;
      margin: 1rem;
    };
  };
`;

const SkillBarBlock = styled.div`

  .info {
    padding-bottom: 1.5rem;
  }

  .info span{
    font-size: 1.5rem;
    font-weight: 500;
  }

  .progressLine {
    position: relative;
    height: 10px;
    width: 100%;
    background-color: #f0f0f0;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.05),
                      0px 1px rgba(255,255,255,0.8);
  }

  .progressLine span {
    height: 100%;
    width: ${props=>props.percent || 0};
    background: #6665ee;
    position: absolute;
    border-radius: 10px;
  }

  .progressLine span::before {
    position: absolute;
    content: "";
    right: 0;
    top: -10px;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
  }

  .progressLine span::after {
    position: absolute;
    content: "${props=> props.percent}";
    right: 0;
    top: -27px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    background: #000;
    padding: 1px 8px;
    border-radius: 3px;
  }
`;

const SkillBar = ({skillName, percent})=>{
  return(
    <SkillBarBlock percent={percent} skillName={skillName}>
      <div className="info">
        <span>{skillName}</span>
      </div>
      <div className="progressLine">
        <span></span>
      </div>
    </SkillBarBlock>
  )
};

SkillBar.propTypes = {
  percent: PropTypes.string,
}

const SkillSet = ()=>{
  return(
  <SkillSetBlock>
    <div className="header">
      <span className="skillSet">Skill Set</span>
    </div>
    <div className="container">
      <div className="frontEnd">
        <SkillBar skillName="HTML/CSS" percent="75%"/>
        <SkillBar skillName="React/Redux" percent="50%"/>
      </div>
      <div className="backEnd">
        <SkillBar skillName="Node.js/Koa" percent="25%"/>
        <SkillBar skillName="MongoDB" percent="25%"/>
      </div>
      <div className="language">
        <SkillBar skillName="JavaScript" percent="75%"/>
        <SkillBar skillName="Python" percent="50%"/>
      </div>
    </div>
  </SkillSetBlock>
  )
};

export default SkillSet;