import React from 'react';
import { ProjectStyled, Links } from './Project.styled';

function Project(props) {

  const { image, name, description, live, repo } = props;
  return (
    <ProjectStyled key={name}>
      <a href={live} target="_blank" rel="noreferrer noopener"><img src={image} alt={name} /></a>
      <h3>{name}</h3>
      <p>{description}</p>
      <Links>
        <a href={live} target="_blank" rel="noreferrer noopener">live</a>
        <a href={repo} target="_blank" rel="noreferrer noopener">repo</a>
      </Links>
    </ProjectStyled>
  )
}

export default Project;