import styled from 'styled-components';
import PushPinIcon from "@mui/icons-material/PushPin";
import { Card } from '../styles/StyledComponents';
import CardOptions from './CardOptions';
import Tooltip from '@mui/material/Tooltip';

const PinIcon = styled(PushPinIcon)`
  color: ${({ important }) => (important ? "#bd3026" : "#998c8b")};
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s ease;
`;

const TodoCard = ({
  text,
  onDelete,
  onEdit,
  onMoveUp,
  onMoveDown,
  important,
  onToggleImportant,
}) => {
  return (
    <Card important={important}>
      <Tooltip title={important ? "Unmark as important" : "Mark as important"}>
        <PinIcon
          important={important}
          onClick={onToggleImportant}
        />
      </Tooltip>
      <p style={{maxWidth: "500px", overflowWrap: "break-word", textAlign: "left"}}>{text}</p>
      <CardOptions
        currentText={text}
        onDelete={onDelete}
        onEditConfirm={onEdit}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
      />
    </Card>
  );
};

export default TodoCard;
