import { React } from "react";
import "../components/Viewer.css";
import { useOutletContext } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Viewer() {
  const [
    notes,
    setNotes,
    formatDate,
    saveHandler,
    deleteHandler,
    currNote,
    setCurrNote,
    index,
    editHandler,
  ] = useOutletContext();
  return (
    <section className="viewer">
      <div className="header-section viewer-header">
        <div className="input-block">
          <h2>
            {currNote.title.length < 20
              ? currNote.title
              : currNote.title.slice(0, 17) + "..."}
          </h2>

          <p className="formatted-date">{formatDate(currNote.time)}</p>
        </div>
        <div className="btns">
          <div className="btn" onClick={() => editHandler(currNote)}>
            Edit
          </div>
          <div className="btn" onClick={() => deleteHandler(currNote.id)}>
            Delete
          </div>
        </div>
      </div>

      <ReactQuill
        className="quill"
        theme="snow"
        value={currNote.content}
        readOnly={true}
        modules={{
          toolbar: null,
        }}
      />
    </section>
  );
}

export default Viewer;
