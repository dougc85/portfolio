import styled from 'styled-components';

export const SkillsStyled = styled.section`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 1.8rem;
  height: 500px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
  }

  >div {
    flex: 1;
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    i {
      font-size: 100px;
      margin: 0 1rem;
      display: block;
    }
    img {
      height: 100px;
      display: block;
      border: 1px solid red;
    }
  }
  
`