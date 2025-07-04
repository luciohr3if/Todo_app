import { useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "./utils/storage";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import styled from "styled-components";
import ThemeToggle from "./components/theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("app_theme");
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app_theme", newTheme);
  };

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(loadFromStorage())
  }, [])

  useEffect(() => {
    saveToStorage(todos)
  }, [todos])

  return (
    <MainDiv>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <h1>MY TO-DO LIST</h1>
        <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </ThemeProvider>
    </MainDiv>
  )
}
export default App;