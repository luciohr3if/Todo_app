import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

const TodoForm = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: input.trim(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default TodoForm;
