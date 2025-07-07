import { useState } from 'react';
import {
  StyledEditNoteIcon,
  StyledDeleteIcon,
  StyledArrowUpwardIcon,
  StyledArrowDownwardIcon
} from '../Icons/Icons';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { EditInput } from '../styles/StyledComponents';


const CardOptions = ({ onDelete, onEditConfirm, onMoveUp, onMoveDown, currentText }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editValue, setEditValue] = useState(currentText);

  const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    backgroundColor: '#fff',
    boxShadow: 24,
    padding: '20px',
    borderRadius: '10px',
    gap: '10px',
    minWidth: '250px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  };

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
    <div style={{ backgroundColor: 'transparent', display: 'flex', gap: '8px' }}>
      <Tooltip title="Mover para cima">
        <button onClick={onMoveUp} style={{ backgroundColor: 'transparent' }}>
          <StyledArrowUpwardIcon />
        </button>
      </Tooltip>

      <Tooltip title="Mover para baixo">
        <button onClick={onMoveDown} style={{ backgroundColor: 'transparent' }}>
          <StyledArrowDownwardIcon />
        </button>
      </Tooltip>

      <Tooltip title="Editar nota">
        <button onClick={() => setOpenEditModal(true)} style={{ backgroundColor: 'transparent' }}>
          <StyledEditNoteIcon />
        </button>
      </Tooltip>

      <Tooltip title="Excluir nota">
        <button onClick={() => setOpenDeleteModal(true)} style={{ backgroundColor: 'transparent' }} variant='contained'>
          <StyledDeleteIcon />
        </button>
      </Tooltip>

      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <div style={modalStyle}>
          <p>
            Are you sure you want to <b style={{ color: 'red' }}>delete</b> this <b>Note</b>?
          </p>
          <div style={rowStyle}>
            <button onClick={() => setOpenDeleteModal(false)}>No</button>
            <button onClick={confirmDelete} style={{ backgroundColor: 'red', color: 'white' }}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <div style={modalStyle}>
          <h4>Edit Note</h4>
          <EditInput
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <div style={rowStyle}>
            <button onClick={() => setOpenEditModal(false)}>Cancel</button>
            <button onClick={confirmEdit} style={{ backgroundColor: 'green', color: 'white' }}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardOptions;
