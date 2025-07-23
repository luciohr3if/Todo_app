import Switch from '@mui/material/Switch';
import styled, { createGlobalStyle } from 'styled-components'

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

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const StyledThemeToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
  margin-top: 1.563rem;
  margin-right: 1.563rem;
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
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
  }
`;

export const FormInput = styled.input`
  padding: 0.625rem;
  font-size: 1rem;
  width: 18.75rem;
  border: 0.125rem solid #ccc;
  border-radius: 0.3125rem;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({theme}) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.25rem;
`;


interface InputProps {
  $error?: boolean;
}

export const InputFeedback = styled.div<InputProps>`
  font-size: 0.85rem;
  color: ${({theme, $error}) => $error ? "#c60b0b" :  theme.inputPlaceholder};
  text-align: left;
  margin-left: 0.125rem;
`;

export const FormBtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

const BaseButton = styled.button`
  color: #ffffff;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  border: none;
  font-size: 1em;
  outline: none;
  font-weight: 500;
  cursor: pointer;
`

export const AddButton = styled(BaseButton)`
  background-color: #1665afff;
  padding: 0.9375rem;
  font-weight: bold;

  &:hover {
      background-color: #08559d;
    }
`

export const DeleteAllButton = styled(BaseButton)`
  background-color: #c61f2aff;
  padding: 0.9375rem;
  font-weight: bold;

  &:hover {
      background-color: #a20a0a;
    }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 0.938rem;
  margin: 0 auto;
  margin-bottom: 1.25rem;
  padding: 0;
  width: 100%;
  max-width: 56.25rem;

  .list-item {
    width: auto;
    max-width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  width: 100%;
`
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0.9375rem;
  gap: 0.625rem;
  border-radius: 0.46875rem;
  margin: 0;
  max-width: 56.25rem;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  p {
    max-width: 31.25rem;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 1.078rem;
  }

    @media (max-width: 600px) {
      max-width: 90%;
    }
`;

export const EditInput = styled.input`
  padding: 0.468rem;
  font-size: 1.125rem;
  border-radius: 0.3125rem;
  border: none;
  width: auto;
  background-color: ${({theme}) => theme.inputBackground};
  margin-top: 0.9375rem;
  border: 0.125rem solid #ccc;
  color: ${({theme}) => theme.inputText};
`;

export const StyledCardOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  margin-left: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const BtnOption = styled.button`
  background-color: transparent;
  padding: 0.3125rem;
  border: none;
  outline-style: none;
  cursor: pointer;
`

export const DeleteButton = styled(BaseButton)`
  background-color: #c61f2aff;

  &:hover {
    background-color: #a20a0a;
  }
`

export const DenyButton = styled(BaseButton)`
  background-color: #212529;

  &:hover {
    background-color: #0f1012ff;
  }
`

export const SaveButton = styled(BaseButton)`
  background-color: #3f751bff;

  &:hover {
    background-color: #335b18ff;
  }
`

export const StyledModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme}) => theme.modalBackground};
  border-radius: 0.78125rem;
  padding: 0.9375rem;
  width: 25rem;
  max-width: 82.5%;

  h2 {
    margin: 0;
    text-align: left;
  }

  p {
    text-align: left;
    color: ${({theme}) => theme.text};
    margin: 0;
    margin-top: 0.9375rem;
    font-size: 1.125rem;
  }
`

export const BtnModalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  margin-top: 0.75rem;
  width: 100%;
  gap: 0.625rem;
  border: none;
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.footerBackground};
  gap: 1.25rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }

  h2 {
    color: #ffffff;
    margin: 0;
  }

  .icon-footer-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.46875rem;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }

  .icon-footer-div img {
    width: 2.1875rem;
    height: 2.1875rem;  
  }
`