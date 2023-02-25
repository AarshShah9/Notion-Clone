import React from "react";
import "../components/Navbar.css";

function Navbar() {
  const menuHandler = () => {
    console.log("menuHandler");
  };

  return (
    <nav>
      <div className="hamburger" onClick={menuHandler}>
        &#9776;
      </div>

      <div className="title">
        <h1>Lotion</h1> <p>Like Notion, but worse.</p>
      </div>

      <div className="spacer"></div>
    </nav>
  );
}

export default Navbar;
