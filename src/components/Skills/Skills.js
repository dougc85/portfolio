import React from 'react';
import { SkillsStyled } from './Skills.styled';

function Skills() {
  return (
    <SkillsStyled id="Skills">
      <h2>Skills</h2>
      <div>
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-typescript-plain colored"></i>
        <i class="devicon-jest-plain colored"></i>
        <i class="devicon-sass-original colored"></i>
        <img src="./images/styled-components.png" alt="styled-components icon" />
        <i class="devicon-firebase-plain-wordmark colored"></i>
        <i class="devicon-git-plain colored"></i>
        <i class="devicon-webpack-plain-wordmark colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>
      </div>
    </SkillsStyled>
  )
}

export default Skills;