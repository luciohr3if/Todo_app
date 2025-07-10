import { useRef, useState } from "react";
import { Button, Form, FormInput } from "../styles/StyledComponents";

const TodoForm = ({ setTodos }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: input.trim(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        ref={inputRef}
        placeholder="Type Anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <Button type="submit">ADD TASK</Button>
    </Form>
  );
};

export default TodoForm;
