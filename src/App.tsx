import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    localStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNotes = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNotes={deleteNotes} />
      </Box>
    </>
  );
}

export default App;
