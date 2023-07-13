import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    noteTitle: "",
    noteContent: "",
  });

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
      <form>
        <input
          onChange={handleChange}
          name="noteTitle"
          placeholder="Title"
          value={newNote.noteTitle}
        />
        <textarea
          onChange={handleChange}
          name="noteContent"
          placeholder="Take a note..."
          rows="3"
          value={newNote.noteContent}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
