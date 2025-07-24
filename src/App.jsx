import { useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "./utils/storage";
import TodoForm from "./components/todoForm";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import Footer from "./components/footer";
import { GlobalStyle, MainDiv } from "./styles/StyledComponents";
import TodoList from "./components/todoList";


function App() {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = loadFromStorage();
    setTodos(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveToStorage(todos);
  }, [todos, loaded]);


  useEffect(() => {
    const saved = localStorage.getItem("app_theme");
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app_theme", newTheme);
  };

  return (
    <MainDiv>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />        
        <h1>MY TASKS</h1>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer />
      </ThemeProvider>
    </MainDiv>
  )
}
export default App;