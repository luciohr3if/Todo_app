import './App.css'
import ThemeComponent from './components/theme'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

  return (
    <div>
        <ThemeComponent />
        <h1>YOUR TO-DO LIST</h1>
        <TodoForm />
        <TodoList/>
    </div>
  )
}

export default App
