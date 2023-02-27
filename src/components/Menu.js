import "../components/Menu.css";
import { v4 as uuidv4 } from "uuid";
import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const Navigate = useNavigate();

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || [])
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
      {}
    </section>
  );
}

export default Menu;
