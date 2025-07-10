import { StyledPushPinIcon } from '../Icons/Icons';
import { Card } from '../styles/StyledComponents';
import CardOptions from './CardOptions';
import Tooltip from '@mui/material/Tooltip';

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
    <Card className='card-div' important={important}>
      <Tooltip title={important ? "Unmark as important" : "Mark as important"}>
        <StyledPushPinIcon
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
