import styled from 'styled-components';

export const ProjectsStyled = styled.section`
  background-color: white;
  padding: 2rem;

  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 2rem;
    max-width: 1400px;
  }
`