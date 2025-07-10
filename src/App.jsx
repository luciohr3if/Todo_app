import { useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "./utils/storage";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import Footer from "./components/Footer";
import { MainDiv } from "./styles/StyledComponents";
import { StyledReceiptLongIcon } from "./Icons/Icons";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

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
          <h1>MY TO-DO LIST <StyledReceiptLongIcon style={{fontSize: "40px"}}/> </h1>
          <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
          <TodoForm setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
          <Footer />
        </ThemeProvider>
    </MainDiv>
  )
}
export default App;