import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
`

export const Button = styled.button`
  padding: 10px 15px;
  background-color:rgb(31, 107, 178);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color:rgb(8, 85, 157);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  border-radius: 7.5px;
  margin: 10px 0;
  width: auto;
  max-width: 100%;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  .btn-test {
    height: 60px;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({theme}) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }
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
  background-color: ${({theme}) => theme.modalBackground};
  border-radius: 12.5px;
  padding: 10px 15px;
  width: 400px;

  .input-modal {
    width: auto;
    background-color: ${({theme}) => theme.inputBackground};
    border: 2px solid #ccc;
    color: ${({theme}) => theme.inputText};
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

export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme}) => theme.modalBackground};
  border-radius: 12.5px;
  padding: 20px 15px 10px 15px;
  width: auto;

  h2 {
    margin: 0;
  }

  p {
    text-align: left;
    color: ${({theme}) => theme.text};
    margin: 0;
    margin-top: 15px;
  }

  .btns-delete-modal {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-top: 12px;
    gap: 10px;
  }

  .btns-delete-modal :nth-child(2) {
    background-color: red;
    color: white;
  }
`

export const StyledThemeToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
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
  background-color: ${({theme}) => theme.footerBackground};
  gap: 20px;

  h2 {
    color: #fff;
  }

  .icon-footer-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
  }
`

export const StyledCardOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: auto;

  .btn-option {
    background-color: transparent;
    padding: 5px;
    border: none;
  }
`
interface InputProps {
  error?: boolean;
}

export const InputFeedback = styled.div<InputProps>`
  font-size: 0.85rem;
  color: ${({ error }) => (error ? 'red' : '#888')};
  margin-top: 4px;
  text-align: left;
`;