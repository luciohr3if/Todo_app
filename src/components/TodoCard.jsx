import styled from 'styled-components';
import PushPinIcon from "@mui/icons-material/PushPin";
import CardOptions from './cardoptions';
import { Card } from '../styles/StyledComponents';

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
      <PinIcon
        important={important}
        onClick={onToggleImportant}
        title={important ? "Unmark as important" : "Mark as important"}
      />
      <p style={{flex: 1, margin: 0}}>{text}</p>
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
