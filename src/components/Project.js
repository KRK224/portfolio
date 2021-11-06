import React from 'react';
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';


const ProjectBlock = styled.div`
  width: 320px;
  box-shadow: 10px 5px 5px rgb(0, 0, 0, 30%), -3px 5px 5px rgb(0, 0, 0, 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
  margin: 1rem 1rem;

  .imgContainer {
    width: 80%;
    text-align: center;
    img {
      width: 100%;
      height: 245px;
    }
  }
  
  .title {
    margin: 1.4rem 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .projectContents {
    display: flex;
    flex-direction: column;
    text-align: center;
    .personnel {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    .gitUrl {
      margin: 0.5rem 0;
      a {
        font-size: 1.5rem;
        &:hover {
          color: #73e8ff;
        }
      }
    }
  }

  .tags {
    font-size: 0.8rem;
    word-break: keep-all;
    span + span {
      margin-left: 0.4rem;
    }
  }

`;

const Project = ({imgPath, title, details, url, tags})=>{
  const tagsList = tags.map((tag, index) =><span key={index}>#{tag}</span>);
  
  return(
  <ProjectBlock>
    <div className="imgContainer">
      <img src={imgPath} alt="Project Gif" />
    </div>
    <div className="title">
      {title}
    </div>
    <div className="projectContents">
      <div className="personnel">개인 프로젝트</div>
      <div className="details">{details}</div>
      <div className="gitUrl">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="tags">
        {tagsList}
      </div>
    </div>
  </ProjectBlock>
  );
}

export default Project;