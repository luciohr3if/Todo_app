import { useRef, useState } from "react";
import { AddButton, BtnModalDiv, DeleteAllButton, DeleteButton, DenyButton, Form, FormBtnsDiv, FormInput, FormInputDiv, InputFeedback, StyledModalDiv } from "../styles/StyledComponents";
import Modal from "@mui/material/Modal";

const TodoForm = ({ setTodos }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length > 500) {
      setError("Maximum of 500 characters reached");
      return;
    }

    setInput(value);
    if (error) setError("");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: input.trim(),
      important: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
    inputRef.current?.focus();
    if (error) setError("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInputDiv>
          <FormInput
            name="todo-app-input"
            type="text"
            ref={inputRef}
            placeholder="Type Anything..."
            value={input}
            onChange={handleChange}
            autoFocus
          />
          <InputFeedback $error={error}>
            {error || `${input.length}/500 characters`}
          </InputFeedback>
        </FormInputDiv>
        <FormBtnsDiv>
          <AddButton type="submit">ADD TASK</AddButton>
          <DeleteAllButton type="button" onClick={() => setOpenDeleteModal(true)}>DELETE ALL TASKS</DeleteAllButton>
        </FormBtnsDiv>
      </Form>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <StyledModalDiv>
          <h2>DELETE ALL TASKS</h2>
          <p>
            Are you sure you want to delete <b>All Tasks</b>?
          </p>
          <BtnModalDiv>
            <DenyButton onClick={() => setOpenDeleteModal(false)}>Cancel</DenyButton>
            <DeleteButton onClick={() => {
                setTodos([]); 
                setOpenDeleteModal(false)
              }}>
                Delete
            </DeleteButton>
          </BtnModalDiv>
        </StyledModalDiv>
      </Modal>
    </>
      
  );
};

export default TodoForm;
