import styled from 'styled-components';

export const AboutStyled = styled.section`

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 2rem auto;

  img {
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    object-position: top;
  }

  >div {
    margin-left: 2rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.4rem;
      max-width: 700px;

      >span {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Links = styled.div`
  text-align: end;
  margin-top: 2rem;

  a {
    margin-left: 1rem;
    :visited, :active, :link {
      text-decoration: none;
    }
    i {
      font-size: 3rem;
    }
  }
`