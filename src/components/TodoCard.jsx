import { StyledPushPinIcon } from '../Icons/Icons';
import { BtnOption, Card } from '../styles/StyledComponents';
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
    <Card className='card-div' $important={important}>
      <Tooltip title={important ? "Unmark as important" : "Mark as important"}>
        <BtnOption>
          <StyledPushPinIcon
            $important={important}
            onClick={onToggleImportant}
          />
        </BtnOption>
      </Tooltip>
      <p>{text}</p>
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
