import styled from 'styled-components';

const backgroundColor = '#dfe5f4';

export const ContactBackground = styled.div`
  background-color: black;
  padding: 5rem;
`;

export const ContactStyled = styled.div`
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 2rem 5rem 3rem 5rem;
  text-align: start;
  border-radius: 20px;
  background-color: ${backgroundColor};

  >h2 {
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    color: black;
    margin: 0 auto 2rem auto;
  }

  >p {
    height: 500px;
    text-align: center;
  }
`

export const ContactForm = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-left: 3px;
    margin-bottom: 5px;

    span {
      font-size: .8em;
      display: inline-block;
      margin-left: 13px;
      color: red;
    }
  }
`

export const FormElement = styled.div`

  input {
    padding: 5px;
    padding-left: 8px;
    font-size: 1.6rem;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: 1px solid #ababab;
  }
`

export const FormElementTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  textarea {
    padding: 6px;
    font-size: 1.6rem;
    flex: 1;
    border-radius: 10px;
    border: 1px solid #ababab;
  }
`

export const FormElementButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  >button {
    background-color: white;
    border: 1px solid #ababab;
    border-radius: 10px;
    padding: 12px;
    font-size: 2rem;
    position: relative;
    cursor: pointer;
    :active {
      background-color: #d8d8d8;
    }
  }
`