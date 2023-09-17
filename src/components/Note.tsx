import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import { NoteObject } from "../models/note";

interface INoteProps {
  note: NoteObject;
  deleteNotes: (id: number) => void;
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 10px;
`;

const Wrapper = styled(Box)`
  & > button {
    border: 1px solid black;
    background-color: #fff;
    color: #eb60a9;
  }
  & > button:hover {
    background-color: #f1e6f1;
    border: 1px solid black;
  }
`;

const Note: React.FC<INoteProps> = ({ note, deleteNotes }) => {
  return (
    <StyledCard style={{ backgroundColor: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNotes(note.id)}>
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
