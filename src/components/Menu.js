import "../components/Menu.css";
import { v4 as uuidv4 } from "uuid";
import { React } from "react";
import NoteCard from "./NoteCard";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const { selectHandler, notes, setNotes, formatDate } = props;
  const Navigate = useNavigate();

  const addHandler = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      time: new Date(),
      content: "",
      index: notes.length + 1,
    };
    setNotes([...notes, newNote]);
    Navigate(`/${newNote.index}/edit`);
  };

  return (
    <section className="menu">
      <div className="mini-header">
        <div className="title-wrapper">
          <h3>Notes</h3>
        </div>
        <div className="add-wrapper">
          <b className="add" onClick={addHandler}>
            +
          </b>
        </div>
      </div>
      <div id="all-cards">
        {notes.length !== 0 ? (
          notes.map((note) => (
            <NoteCard
              info={note}
              key={note.id}
              selectHandler={selectHandler}
              formatDate={formatDate}
            />
          ))
        ) : (
          <p className="no-notes">No Notes Yet</p>
        )}
      </div>
    </section>
  );
}

export default Menu;
