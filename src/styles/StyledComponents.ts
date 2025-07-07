import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
`

export const StyledForm = styled.div`
    background-color: black;
    color: white;
`
export const Button = styled.button`
  padding: 10px 15px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  padding: 10px 15px;
  border-radius: 7.5px;
  margin: 10px 0;
  background-color: "lightgrey";
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const EditInput = styled.input`
  padding: 7px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;