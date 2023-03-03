import "../components/Menu.css";
import { React } from "react";
import NoteCard from "./NoteCard";

function Menu(props) {
  const { selectHandler, notes, setNotes, formatDate, index, addHandler } =
    props;

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
              index={index}
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
