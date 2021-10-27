import React, { useEffect } from 'react';
import styled, {css, keyframes} from 'styled-components';
import PropTypes from 'prop-types';

const showText = keyframes`
  100%{
      opacity: 1;
    }
`;


const SkillBarBlock = styled.div`
  .info {
    padding-bottom: 1.5rem;
  }

  .info span{
    font-size: 1.3rem;
    font-weight: 500;
    opacity: 0;
    animation: showText 0.5s 1s linear forwards;
  }

  @keyframes showText {
    100%{
      opacity: 1;
    }
  }

  .progressLine {
    position: relative;
    height: 10px;
    width: 100%;
    background-color: #f0f0f0;
    transform-origin: left;
    transform: scaleX(0);
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.05),
                      0px 1px rgba(255,255,255,0.8);
    animation-name: none;

    ${props=> props.active && css`
      animation: animate 1s cubic-bezier(1,0,0.5,1) forwards;
    `};
  }

  .progressLine span {
    height: 100%;
    width: ${props=>props.percent || 0};
    background: #6665ee;
    position: absolute;
    border-radius: 10px;
    transform-origin: left;
    transform: scaleX(0);
    
    animation-name: none;
    ${props=>props.active && css`
      animation: animate 1s 1s cubic-bezier(1,0,0.5,1) forwards;
    `};
  }

  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
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
    opacity: 0;
    
    animation-name: none;
    ${props=>props.acitve && css`
      animation: showText2 0.5s 1.5s linear forwards;
    `
    };
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
    opacity: 0;
    animation: none;

    ${props=>props.active &&css`
      animation: showText2 0.5s 1.5s linear forwards;
    `};

  }

  @keyframes showText2 {
    100%{
      opacity: 1;
    }

  }
`;

const SkillBar = ({skillName, percent, active})=>{
  useEffect(()=>{
    console.log('SkillBar rerendering');
    console.log(active);
  },
  [active]);

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

export default SkillBar;