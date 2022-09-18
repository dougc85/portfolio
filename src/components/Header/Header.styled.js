import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1.4rem;

  h1 {
    font-size: 3rem;
    font-weight: normal;
  }

  nav {
    flex: 1;
    margin-left: 50px;

    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      a {
        font-size: 2rem;
        :visited, :active, :link {
          color: white;
          text-decoration: none;
        }

        :hover {
          color: gray;
        }
      }
    }
  }
  
`