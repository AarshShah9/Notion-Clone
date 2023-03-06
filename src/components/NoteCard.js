import { React } from "react";
import "../components/NoteCard.css";

function NoteCard(props) {
  const note = props.info;
  const selectHandler = props.selectHandler;
  const formatDate = props.formatDate;
  const index = props.index;

  return (
    <div
      className={note.index === +index ? "note active" : "note"}
      key={note.id}
      onClick={() => selectHandler(note.id)}
    >
      <div className="note-wrapper">
        <h3>
          {note.title.length > 10
            ? note.title.slice(0, 10) + "..."
            : note.title}
        </h3>
        <p className="formatted-date">
          {note.content.length > 0 ? formatDate(note.time) : <br />}
        </p>
        <div>
          {note.content.length > 60 ? (
            <div
              id="note-body"
              dangerouslySetInnerHTML={{
                __html: note.content.substring(0, 60) + "...",
              }}
            ></div>
          ) : (
            <div
              id="note-body"
              dangerouslySetInnerHTML={{
                __html:
                  note.content !== "<p><br></p>" ? note.content : "<p>...<p/>",
              }}
            ></div>
          )}
          {note.content === "" && <p>...</p>}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
