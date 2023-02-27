import React from "react";
import "../components/NoteCard.css";
import { useParams } from "react-router-dom";

function NoteCard(props) {
  const { index } = useParams();
  const note = props.info;
  const selectHandler = props.selectHandler;
  const formatDate = props.formatDate;

  return (
    <div
      className={+note.index == index ? "note active" : "note"}
      key={note.id}
      onClick={() => selectHandler(note.id)}
    >
      <div className="note-wrapper">
        <h3>{note.title}</h3>
        <p>{note.content.length > 0 ? formatDate(note.time) : null}</p>
        <p>
          {note.content.length > 10 && note.content.length > 0
            ? note.content.slice(0, 10) + "..."
            : note.content}
          {note.content.length === 0 && "..."}
        </p>
      </div>
    </div>
  );
}

export default NoteCard;
