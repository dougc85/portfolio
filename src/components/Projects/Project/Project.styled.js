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
    font-size: 2.4rem;
    margin-top: 1.5rem;
  }

  p {
    width: 280px;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 10px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-top: 10px;
  a {
    font-size: 1.6rem;
    display: block;
    :visited, :active, :link {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`