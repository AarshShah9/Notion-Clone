import "../components/Menu.css";
import { v4 as uuidv4 } from "uuid";
import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const Navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  const addHandler = () => {
    const currentDay = new Date();
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      time: formatDate(currentDay),
      content: "",
      index: notes.length + 1,
    };
    setNotes([...notes, newNote]);
    Navigate(`/edit/${newNote.index}`);
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
