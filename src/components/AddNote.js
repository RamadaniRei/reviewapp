import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 500;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSaveClick();
    }
  };

  return (
    <div className="note new">
      <textarea
        cols={10}
        rows={8}
        placeholder="Type Review Here..."
        value={noteText}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Add the onKeyDown handler
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} left</small>
        <Button className="save" onClick={handleSaveClick}>
          Publish <ArrowUpward />
        </Button>
      </div>
    </div>
  );
}

export default AddNote;
