import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Project from './Project';
import {useMediaQuery} from 'react-responsive';

const ProjectBlock = styled.div`
  padding: 2rem 6rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

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
    margin: 0 auto;
    margin-left: 2rem;
  }

  @media (max-width: 1024px){
    padding: 2rem 2rem;
  }
`;

const Projects = () =>{
  const isDesktop = useMediaQuery({
    query: '(min-width: 1300px)'
  });

  const isTablet = useMediaQuery({
    query: '(min-width:768px)'
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop?3:(isTablet?2:1),
    slidesToScroll: isDesktop?2:1,
    className: "sliderDiv",
    arrows: false,
  };

  const projectData = {
    imgPath: ['img/MBTI.gif', 'img/YoutubeClone.gif'],
    title: ['나와 잘 맞는 연예인은?', 'Youtube Clone', 'Python-Credential-Info-Set'],
    details: ['Redux로 구현한 MBTI 테스트', '바닐라 js를 이용한 유튜브 클론', '같은 양식의 excel 파일을 여러개 생성'],
    url: ['https://github.com/KRK224/MBTI', 'https://github.com/KRK224/Youtube-clone', 'https://github.com/KRK224/Python-Credential-Info-set'],
    tags: [['react', 'react-hooks', 'redux', 'redux-persist'], ['Html5', 'CSS3', 'Vanilla JS', '반응형'], ['Python', 'tkinter', 'tkinterDnd2']],
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
          imgPath={projectData.imgPath[1]} 
          title={projectData.title[1]}
          details={projectData.details[1]}
          url={projectData.url[1]}
          tags={projectData.tags[1]}
        />
        <Project 
          imgPath={projectData.imgPath[0]} 
          title={projectData.title[0]}
          details={projectData.details[0]}
          url={projectData.url[0]}
          tags={projectData.tags[0]}
        />
      </Slider>
    </div>
  </ProjectBlock>
  );
};

export default Projects;