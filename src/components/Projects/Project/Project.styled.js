import styled from 'styled-components';

export const ProjectStyled = styled.li`

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    object-position: top;
  }

  h3 {
    font-weight: bold;
    font-size: 1.6rem;
    margin-top: 1rem;
  }

  p {
    width: 280px;
    text-align: center;
    margin-top: 5px;
  }
`