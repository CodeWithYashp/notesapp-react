import { useState } from "react";
import { Box, InputBase, Button, styled, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";
import { TITLE_LIMIT, DETAILS_LIMIT } from "../constants/constant";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #e28cb9;
    opacity: 0.6;
    width: 300px;
    padding-right: 24px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -8px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      setError("All fields are mandatory!");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObj);
  };

  return (
    <Container>
      <InputBase
        placeholder="Title"
        onChange={(e) => onValueChange(e)}
        name="title"
        value={note.title}
        inputProps={{
          maxLength: TITLE_LIMIT,
        }}
      />
      <Box component="span">
        {note.title.length}/{TITLE_LIMIT}
      </Box>
      <InputBase
        placeholder="Details"
        onChange={(e) => onValueChange(e)}
        name="details"
        value={note.details}
        inputProps={{
          maxLength: DETAILS_LIMIT,
        }}
      />
      <Box component="span">
        {note.details.length}/{DETAILS_LIMIT}
      </Box>
      <InputBase
        type="color"
        defaultValue={"#F5F5F5"}
        onChange={(e) => onValueChange(e)}
        name="color"
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onCreateNote()}
      >
        Create
      </Button>
      {error && <Typography style={{ color: "#d50000" }}>{error}</Typography>}
    </Container>
  );
};

export default CreateNote;
