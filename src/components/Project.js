import React from 'react';
import styled from 'styled-components';

const ProjectBlock = styled.div`

`;

const Project = ({imgPath, title, personnel, details, url, tags})=>{
  <ProjectBlock>
    <div className="imgContainer">
      <img src={imgPath} alt="Project Gif" />
    </div>
    <div className="title">
      {title}
    </div>
    <div className="contents">
      <div className="personnel">{personnel}</div>
      <div className="details">{details}</div>
      <div className="gitUrl">
        <a ref={url} target="_blank">
          
        </a>
      </div>
    </div>
  </ProjectBlock>
}

export default Project;