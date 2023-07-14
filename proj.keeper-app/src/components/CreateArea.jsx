import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    noteTitle: "",
    noteContent: "",
  });

  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addNote(newNote);
    setNewNote({ noteTitle: "", noteContent: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            onChange={handleChange}
            name="noteTitle"
            placeholder="Title"
            value={newNote.noteTitle}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => setExpand(true)}
          name="noteContent"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={newNote.noteContent}
        />
        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
