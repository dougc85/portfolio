import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1rem 1rem 1.8rem 3.3rem;

  h1 {
    font-size: 4.1rem;
    font-weight: normal;

    >span {
      text-transform: uppercase;
      padding-top: 5px;
      padding-left: 2px;
      border-top: 1px solid #5d5d5d;
      display: block;
      font-size: 1.6rem;
      margin-top: 2px;
    }
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
        font-size: 2.6rem;
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