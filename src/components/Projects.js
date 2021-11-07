import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Project from './Project';
import {useMediaQuery} from 'react-responsive';
import {MdArrowLeft, MdArrowRight} from "react-icons/md";

const ProjectBlock = styled.div`
  padding: 2rem 8rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .header {
    margin: 3rem 1rem 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    .projectsTitle {
      padding-left: 2rem;
      border-left: solid 0.8rem black;
    }
  }

  .projectsContents {
    width: 100%;
    margin: 1rem 0;
    margin-left: 2rem;
  }
  .slick-prev {
    color: black;
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    color: black;
    right: 3% !important;
  }

  @media (max-width: 1024px){
    padding: 2rem;
  }
  @media (max-width: 768px){
    padding: 1rem;
    .header {
      margin: 1rem;
      & .projectsTitle {
        font-size: 1.2rem;
      }
    }
    .projectsContents{
      margin-left: 1rem;
    }
  }
`;

const Projects = () =>{
  const isDesktop = useMediaQuery({
    query: '(min-width: 1300px)'
  });

  const isTablet = useMediaQuery({
    query: '(min-width:768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width:768px)'
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop? 3:(isTablet?2:1),
    slidesToScroll: isDesktop?2:1,
    className: "sliderDiv",
    adaptiveHeight: true,
    nextArrow: <MdArrowRight />,
    prevArrow: <MdArrowLeft />,
    swipeToSlide: isMobile? false: true,
  };

  const projectData = {
    imgPath: ['img/MBTI.gif', 'img/Portfolio.gif','img/YoutubeClone.gif', 'img/Python-Credential.gif'],
    title: ['나와 잘 맞는 연예인은?', '개인 포트폴리오', 'Youtube Clone', 'Credential Info Creation'],
    details: ['Redux로 구현한 MBTI 테스트', 'React로 구현한 포트폴리오', '바닐라 js를 이용한 유튜브 클론', 'excel 파일을 데이터별로 여러 개 생성'],
    url: ['https://github.com/KRK224/MBTI', 'https://github.com/KRK224/portfolio', 'https://github.com/KRK224/Youtube-clone', 'https://github.com/KRK224/Python-Credential-Info-set'],
    tags: [['react', 'react-hooks', 'redux', 'redux-persist'], ['react', 'react-slick', 'react-responsive'],['Html5', 'CSS3', 'Vanilla JS', '반응형'], ['Python', 'tkinter', 'tkinterDnd2','win32']],
  };

  return (
  <ProjectBlock>
    <div className="header">
      <span className="projectsTitle">Projects</span>
    </div>
    <div className="projectsContents">
      <Slider {...settings}>
        <Project 
          imgPath={projectData.imgPath[0]} 
          title={projectData.title[0]}
          details={projectData.details[0]}
          url={projectData.url[0]}
          tags={projectData.tags[0]}
        />
        <Project 
          imgPath={projectData.imgPath[1]} 
          title={projectData.title[1]}
          details={projectData.details[1]}
          url={projectData.url[1]}
          tags={projectData.tags[1]}
        />
        <Project 
          imgPath={projectData.imgPath[2]} 
          title={projectData.title[2]}
          details={projectData.details[2]}
          url={projectData.url[2]}
          tags={projectData.tags[2]}
        />
        <Project 
          imgPath={projectData.imgPath[3]} 
          title={projectData.title[3]}
          details={projectData.details[3]}
          url={projectData.url[3]}
          tags={projectData.tags[3]}
        />
      </Slider>
    </div>
  </ProjectBlock>
  );
};

export default Projects;