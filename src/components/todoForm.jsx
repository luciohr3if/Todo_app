import { useRef, useState } from "react";
import { Button, DeleteModal, Form, FormInput, InputFeedback } from "../styles/StyledComponents";
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
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInput("");
    inputRef.current?.focus();
    if (error) setError("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: "center"}}>
          <FormInput
            type="text"
            ref={inputRef}
            placeholder="Type Anything..."
            value={input}
            onChange={handleChange}
            autoFocus
          />
          <InputFeedback error={error}>
            {error || `${input.length}/500 characters`}
          </InputFeedback>
        </div>

        <div style={{display: 'flex', gap: '8px', justifyContent: "center" }}>
          <Button className="btn-test" type="submit">ADD TASK</Button>
          <Button
            className="btn-test"
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={() => setOpenDeleteModal(true)}
          >
            DELETE ALL TASKS
          </Button>
        </div>
      </Form>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
      <DeleteModal>
        <h2>DELETE ALL TASKS</h2>
        <p>
          Are you sure you want to delete <b>All Tasks</b>?
        </p>
        <div className='btns-delete-modal'>
          <button onClick={() => setOpenDeleteModal(false)}>No</button>
          <button onClick={() => {
              setTodos([]); 
              setOpenDeleteModal(false)
            }}
            >Delete
          </button>
        </div>
        </DeleteModal>
      </Modal>
    </>
      
  );
};

export default TodoForm;
