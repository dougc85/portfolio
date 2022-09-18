import styled from 'styled-components';

export const SkillsStyled = styled.section`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 3rem;
    font-size: 3rem;
  }

  >div {
    flex: 1;
    margin: 0 auto;
    min-width: 80%;
    display: grid;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
    gap: 3rem 10px;
    place-content: center;
    margin-bottom: 2rem;


    i {
      font-size: calc(30px + 5vw);;
      display: block;
    }
    img {
      height: calc(30px + 5vw);
      display: block;
      justify-self: center;
    }
  }
  
`