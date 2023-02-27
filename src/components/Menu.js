import "../components/Menu.css";
import { v4 as uuidv4 } from "uuid";
import { useState, React, useEffect } from "react";
import NoteCard from "./NoteCard";
import { Outlet, useNavigate } from "react-router-dom";

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
        <h3>Notes</h3>
        <b className="add" onClick={addHandler}>
          +
        </b>
      </div>
      {notes.map((note) => (
        <NoteCard
          info={note}
          key={note.id}
          selectHandler={selectHandler}
          formatDate={formatDate}
        />
      ))}
    </section>
  );
}

export default Menu;
