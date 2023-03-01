import { useState, React, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

import Menu from "./Menu";
import "../components/Layout.css";

function Layout() {
  const [menu, setMenu] = useState(true);
  const Navigate = useNavigate();

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || [])
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes) || []);
  }, [notes]);

  const menuHandler = () => {
    setMenu(!menu);
  };

  const selectHandler = (id) => {
    const note = notes.find((note) => note.id === id);
    Navigate(`/${note.index}`);
  };

  const saveHandler = (updatedNote) => {
    // find the note in the notes array
    // replace the updated note with the old note in state
    // navigate off of edit mode
    let noteIndex;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === updatedNote.id) {
        noteIndex = i;
      }
    }

    // notes[noteIndex] = updatedNote;

    setNotes(
      notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      })
    );

    Navigate(`/${updatedNote.index}}`);
  };

  const deleteHandler = (id) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      const newNotes = notes.filter((note) => note.id !== id);

      newNotes.forEach((note, index) => {
        note.index = index + 1;
      });

      setNotes(newNotes);
      Navigate("/");
    }
  };

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

  return (
    <div className="layout">
      <Navbar menuHandler={menuHandler} />
      <section className="main-section">
        {menu ? (
          <Menu
            selectHandler={selectHandler}
            notes={notes}
            setNotes={setNotes}
            formatDate={formatDate}
          />
        ) : null}

        <div className="content-wrapper">
          <div id="content">
            {/* child components get injected here and replace <Outlet /> */}
            <Outlet
              context={[
                notes,
                setNotes,
                formatDate,
                saveHandler,
                deleteHandler,
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;
