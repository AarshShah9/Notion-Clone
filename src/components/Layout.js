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
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const menuHandler = () => {
    setMenu(!menu);
  };

  const selectHandler = (id) => {
    const note = notes.find((note) => note.id === id);
    Navigate(`/${note.index}`);
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
          />
        ) : null}
        <div id="content">
          {/* child components get injected here and replace <Outlet /> */}
          <Outlet context={[notes, setNotes]} />
        </div>
      </section>
    </div>
  );
}

export default Layout;
