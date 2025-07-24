import { List, ListItem } from '../styles/StyledComponents';
import TodoCard from './TodoCard';


function TodoList({ todos, setTodos }) {

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);
  };

  const moveDown = (index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
    setTodos(newTodos);
  };

  const onEditConfirm = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.important === b.important) return 0;
    return a.important ? -1 : 1; 
  });

  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  return (
    <List>
      {sortedTodos.map((todo, index) => (
        <ListItem key={todo.id}>
          <TodoCard
            text={todo.text}
            onDelete={() => remove(todo.id)}
            onEdit={(newText) => onEditConfirm(todo.id, newText)}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            important={todo.important}
            onToggleImportant={() => toggleImportant(todo.id)}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
