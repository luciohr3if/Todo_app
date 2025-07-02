import styled from 'styled-components';
import PushPinIcon from "@mui/icons-material/PushPin";
import CardOptions from './cardoptions';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  padding: 10px 15px;
  border-radius: 7.5px;
  margin: 10px 0;
  background-color: ${({ important }) => (important ? "#fff5e6" : "lightgrey")};
`;

const PinIcon = styled(PushPinIcon)`
  color: ${({ important }) => (important ? "orange" : "gray")};
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s ease;
`;

const Text = styled.p`
  flex: 1;
  margin: 0;
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
      <Text>{text}</Text>
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
