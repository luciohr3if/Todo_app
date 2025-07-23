import { useState } from 'react';
import {
  StyledEditNoteIcon,
  StyledDeleteIcon,
  StyledArrowUpwardIcon,
  StyledArrowDownwardIcon
} from '../Icons/Icons';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { BtnModalDiv, BtnOption, DeleteButton, DenyButton, EditInput, SaveButton, StyledCardOptionsDiv, StyledModalDiv } from '../styles/StyledComponents';


const CardOptions = ({ onDelete, onEditConfirm, onMoveUp, onMoveDown, currentText }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editValue, setEditValue] = useState(currentText);

  const confirmDelete = () => {
    onDelete();
    setOpenDeleteModal(false);
  };

  const confirmEdit = () => {
    const trimmed = editValue.trim();
    if (trimmed) {
      onEditConfirm(trimmed);
      setOpenEditModal(false);
    }
  };

  return (
    <StyledCardOptionsDiv>
      <Tooltip title="Move Up">
        <BtnOption onClick={onMoveUp} >
          <StyledArrowUpwardIcon />
        </BtnOption>
      </Tooltip>
      <Tooltip title="Move Down">
        <BtnOption onClick={onMoveDown}>
          <StyledArrowDownwardIcon />
        </BtnOption>
      </Tooltip>
      <Tooltip title="Edit Task">
        <BtnOption onClick={() => setOpenEditModal(true)}>
          <StyledEditNoteIcon />
        </BtnOption>
      </Tooltip>
      <Tooltip title="Delete Task">
        <BtnOption onClick={() => setOpenDeleteModal(true)}>
          <StyledDeleteIcon />
        </BtnOption>
      </Tooltip>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <StyledModalDiv>
          <h2>DELETE TASK</h2>
          <p>
            Are you sure you want to delete this <b>Task</b>?
          </p>
          <BtnModalDiv>
            <DenyButton onClick={() => setOpenDeleteModal(false)}>No</DenyButton>
            <DeleteButton onClick={confirmDelete}>Delete</DeleteButton>          
          </BtnModalDiv>
        </StyledModalDiv>
      </Modal>
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <StyledModalDiv>
          <h2>EDIT TASK</h2>
          <EditInput
            type="text"
            value={editValue}
            name="input-modal"
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
            placeholder="Type Anything..."
          />
          <BtnModalDiv>
            <DenyButton onClick={() => setOpenEditModal(false)}>Cancel</DenyButton>
            <SaveButton onClick={confirmEdit}>Save</SaveButton>
          </BtnModalDiv>
        </StyledModalDiv>
      </Modal>
    </StyledCardOptionsDiv>
  );
};

export default CardOptions;
