import React from "react";
import "../components/Navbar.css";

function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="hamburger" onClick={props.menuHandler}>
          &#9776;
        </div>

        <div className="title">
          <h1>Lotion</h1> <p>Like Notion, but worse.</p>
        </div>

        <div className="spacer"></div>
      </nav>
    </div>
  );
}

export default Navbar;
