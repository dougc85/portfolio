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
    font-size: 1rem;
    text-align: center;
    margin-top: 5px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-top: 5px;
  a {
    font-size: .9rem;
    display: block;
    :visited, :active, :link {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`