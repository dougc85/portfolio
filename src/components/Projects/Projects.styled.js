import styled from 'styled-components';

export const ProjectsStyled = styled.section`
  background-color: white;
  padding: 3rem;

  h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 3.5rem;
    max-width: 1400px;
  }
`