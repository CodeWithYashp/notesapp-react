import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import Note from "./Note";

interface INotesProps {
  notes: NoteObject[];
  deleteNotes: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNotes }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box>
        {notes.map((note) => (
          <Note note={note} deleteNotes={deleteNotes} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
