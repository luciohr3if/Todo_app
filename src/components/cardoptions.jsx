import { useState } from 'react';
import {
  StyledEditNoteIcon,
  StyledDeleteIcon,
  StyledArrowUpwardIcon,
  StyledArrowDownwardIcon
} from '../Icons/Icons';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { DeleteButton, DenyButton, EditInput, SaveButton, StyledCardOptionsDiv, StyledModalDiv } from '../styles/StyledComponents';


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
        <button className='btn-option' onClick={onMoveUp} >
          <StyledArrowUpwardIcon />
        </button>
      </Tooltip>
      <Tooltip title="Move Down">
        <button className='btn-option' onClick={onMoveDown}>
          <StyledArrowDownwardIcon />
        </button>
      </Tooltip>
      <Tooltip title="Edit Task">
        <button className='btn-option' onClick={() => setOpenEditModal(true)}>
          <StyledEditNoteIcon />
        </button>
      </Tooltip>
      <Tooltip title="Delete Task">
        <button className='btn-option' onClick={() => setOpenDeleteModal(true)}>
          <StyledDeleteIcon />
        </button>
      </Tooltip>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <StyledModalDiv>
          <h2>DELETE TASK</h2>
          <p>
            Are you sure you want to delete this <b>Task</b>?
          </p>
          <div className='btn-modal-div'>
            <DenyButton onClick={() => setOpenDeleteModal(false)}>No</DenyButton>
            <DeleteButton onClick={confirmDelete}>Delete</DeleteButton>          
          </div>
        </StyledModalDiv>
      </Modal>
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <StyledModalDiv>
          <h2>EDIT TASK</h2>
          <EditInput
            type="text"
            value={editValue}
            className='input-modal'
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <div className='btn-modal-div'>
            <DenyButton onClick={() => setOpenEditModal(false)}>Cancel</DenyButton>
            <SaveButton onClick={confirmEdit}>Save</SaveButton>
          </div>
        </StyledModalDiv>
      </Modal>
    </StyledCardOptionsDiv>
  );
};

export default CardOptions;
