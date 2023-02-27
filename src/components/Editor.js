import { useParams, useOutletContext } from "react-router-dom";
import { useState, React, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../components/Editor.css";

function Editor(props) {
  var { index } = useParams();
  const [notes, setNotes] = useOutletContext();
  const [readOnly, setReadOnly] = useState(false);
  const [currNote, setCurrNote] = useState(
    notes.find((note) => note.index === parseInt(index))
  );

  useEffect(() => {
    setCurrNote(notes.find((note) => note.index === parseInt(index)));
  }, [index]);

  return (
    console.log(currNote),
    console.log(notes),
    (
      <section className="editor">
        <div className="header-section">
          <h3>
            <input
              type="text"
              onChange={(e) => {
                setCurrNote({ ...currNote, title: e.target.value });
              }}
              value={currNote.title}
            />
          </h3>
          <div>{readOnly ? "Edit" : "Save"}</div>
          <div>Delete</div>
        </div>

        <ReactQuill
          theme="snow"
          onChange={(e) => setCurrNote(e)}
          value={currNote}
        />
      </section>
    )
  );
}

export default Editor;
