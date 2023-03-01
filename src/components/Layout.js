import { useState, React, useEffect } from "react";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";

import { Outlet, useNavigate, useParams } from "react-router-dom";

import Menu from "./Menu";
import "../components/Layout.css";

function Layout() {
  var { index } = useParams();

  const [menu, setMenu] = useState(true);
  const Navigate = useNavigate();

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || [])
  );

  const [currNote, setCurrNote] = useState(
    notes.find((note) => note.index === parseInt(index))
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes) || []);
  }, [notes]);

  const menuHandler = () => {
    setMenu(!menu);
  };

  const selectHandler = (id) => {
    const note = notes.find((note) => note.id === id);
    setCurrNote(note);
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

  const addHandler = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      time: new Date(),
      content: "",
      index: notes.length + 1,
    };
    console.log(notes);
    setNotes([...notes, newNote]);
    console.log(notes);

    Navigate(`/${newNote.index}/edit`);
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
            index={index}
            addHandler={addHandler}
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
                currNote,
                setCurrNote,
                index,
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;
