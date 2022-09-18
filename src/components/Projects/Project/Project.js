import React from 'react';
import { ProjectStyled } from './Project.styled';

function Project(props) {

  const { image, name, description } = props;
  return (
    <ProjectStyled key={name}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </ProjectStyled>
  )
}

export default Project;