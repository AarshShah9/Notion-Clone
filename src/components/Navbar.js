import React from "react";
import "../components/Navbar.css";

function Navbar(props) {
  return (
    <nav>
      <div className="wrapper" onClick={props.menuHandler}>
        <div className="burger"> &#9776;</div>
      </div>

      <div className="title">
        <h1>Lotion</h1>
        <p>Like Notion, but worse.</p>
      </div>

      <div className="spacer"></div>
    </nav>
  );
}

export default Navbar;
