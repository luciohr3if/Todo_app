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
  background-color: #004e98;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color:rgb(3, 65, 123);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
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
  padding: 7.5px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
`;

export const EditModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #595c61;
  border-radius: 12.5px;
  padding: 10px;
  width: 400px;

  .input {
    width: auto;
  }

  .btns-edit-modal {
    display: flex;
    margin-left: auto;
    margin-top: 12px;
    gap: 10px;
  }

  .btns-edit-modal :nth-child(2) {
    background-color: green;
    color: white;
  }
`

export const StyledThemeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 1440px;
  align-items: center;
  justify-content: center;
  background-color: #343A40;
  gap: 20px;

  h2 {
    color: white;
  }

  .icon-footer-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
  }
`