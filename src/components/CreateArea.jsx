import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  const [dis, setdis] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);        //?
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function display() {
    setdis(true);
  }

  return (
    <div>
      <form className="create-note">
      {dis ? ( <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> ) : null}
        <textarea
          name="content"
          onClick={display}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={dis ? "3" : "1"}
        />

{dis ? ( <Zoom in={true}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>  ) : null}

      </form>
    </div>
  );
}

export default CreateArea;
