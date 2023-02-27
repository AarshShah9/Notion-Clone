import { useParams, useOutletContext } from "react-router-dom";
import { useState, React, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../components/Editor.css";

function Editor() {
  var { index } = useParams();
  const [notes, setNotes, formatDate] = useOutletContext();
  const [readOnly, setReadOnly] = useState(false);
  const [currNote, setCurrNote] = useState(
    notes.find((note) => note.index === parseInt(index))
  );

  useEffect(() => {
    setCurrNote(notes.find((note) => note.index === parseInt(index)));
  }, [index]);

  const convertLocaltoDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const hour = date.slice(11, 13);
    const minute = date.slice(14, 16);
    return new Date(year, month, day, hour, minute);
  };

  const convertDatetoLocal = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }

    return `${year}-${month}-${day}T${hour}:${minute}`;
  };

  return (
    <section className="editor">
      <div className="header-section">
        <div className="input-block">
          <input
            type="text"
            onChange={(e) => {
              setCurrNote({
                ...currNote,
                title: e.target.value,
              });
            }}
            value={currNote.title}
          />
          <input
            type="datetime-local"
            onChange={(e) => {
              setCurrNote({
                ...currNote,
                time: convertLocaltoDate(e.target.value),
              });
            }}
            value={convertDatetoLocal(currNote.time)}
          />
        </div>
        <div>{readOnly ? "Edit" : "Save"}</div>
        <div>Delete</div>
      </div>

      <ReactQuill
        theme="snow"
        onChange={(e) => setCurrNote(e)}
        value={currNote}
      />
    </section>
  );
}

export default Editor;
