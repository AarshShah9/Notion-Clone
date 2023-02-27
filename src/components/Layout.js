import { React, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import "../components/Layout.css";

function Layout() {
  const [menu, setMenu] = useState(true);

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className="layout">
      <Navbar menuHandler={menuHandler} />
      <section className="main-section">
        {menu ? <Menu /> : null}
        <div id="content">
          {/* child components get injected here and replace <Outlet /> */}
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Layout;
