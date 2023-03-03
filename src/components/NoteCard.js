import { React, useEffect } from "react";
import "../components/NoteCard.css";

function NoteCard(props) {
  const note = props.info;
  const selectHandler = props.selectHandler;
  const formatDate = props.formatDate;
  const index = props.index;
  let subString = note.content.slice(3).slice(0, -4);

  return (
    <div
      className={note.index === +index ? "note active" : "note"}
      key={note.id}
      onClick={() => selectHandler(note.id)}
    >
      <div className="note-wrapper">
        <h3>{note.title}</h3>
        <p className="formatted-date">
          {note.content.length > 0 ? formatDate(note.time) : null}
        </p>
        <p>
          {note.content.length > 60
            ? subString.slice(0, 60) + "..."
            : subString}
          {note.content.length === 0 && "..."}
        </p>
      </div>
    </div>
  );
}

export default NoteCard;
