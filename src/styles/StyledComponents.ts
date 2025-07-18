import Switch from '@mui/material/Switch';
import styled, { createGlobalStyle } from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100%;
  }
`;

export const StyledThemeToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  margin-right: 25px;
`

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.mode === 'dark' ? '#CED4DA' : '#DEE2E6',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#ADB5BD',
    opacity: 1,
  },
  '& .Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.mode === 'dark' ? '#495057' : '#ADB5BD',
    opacity: 1,
  },
}));

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({theme}) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 4px;
`;


interface InputProps {
  error?: boolean;
}

export const InputFeedback = styled.div<InputProps>`
  font-size: 0.85rem;
  color: ${({theme, error}) => error ? "#c60b0b" :  theme.inputText};
  text-align: left;
  margin-left: 2px;
`;

export const FormBtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;

  .add-btn {
    padding: 15px;
    background-color: #1665afff;
    color: #ffffff;
    border: none;
    outline-style: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #08559d;
    }
  }

  .delete-btn {
    padding: 15px;
    background-color: #c61f2aff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    outline-style: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #a20a0a;
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 10px;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;
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
  width: 100%;
  max-width: 900px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  p {
    max-width: 500px;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 17.25px;
  }
`;

export const EditInput = styled.input`
  padding: 7.5px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
`;

export const StyledCardOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: auto;

  .btn-option {
    background-color: transparent;
    padding: 5px;
    border: none;
    outline-style: none;
  }
`

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

  .btn-edit-modal {
    display: flex;
    margin-left: auto;
    margin-top: 12px;
    gap: 10px;
  }

  .btn-edit-modal :nth-child(2) {
    background-color: #3f751bff;
    color: #ffffff;
    outline-style: none;
    border: none;
    font-size: 17px;
  }

  .btn-edit-modal :nth-child(1) {
    background-color: #212529;
    color: #ffffff;
    outline-style: none;
    border: none;
    font-size: 17px;
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
    font-size: 18px;
  }

  .btn-delete-modal {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-top: 12px;
    gap: 10px;
    outline-style: none;
    border: none;
  }

  .btn-delete-modal :nth-child(2) {
    background-color: #c61f2aff;
    color: #ffffff;
    border: none;
    outline-style: none;
    font-size: 17px;
  }

  .btn-delete-modal :nth-child(1) {
    background-color: #212529;
    color: #ffffff;
    border: none;
    outline-style: none;
    font-size: 17px;
  }
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.footerBackground};
  gap: 20px;

  h2 {
    color: #ffffff;
  }

  .icon-footer-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
  }

  .icon-footer-div img {
    width: 35px;
    height: 35px;  
  }
`