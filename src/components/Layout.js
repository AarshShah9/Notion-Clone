import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import "../components/Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <section className="main-section">
        <Menu />
        <div id="content">
          {/* child components get injected here and replace <Outlet /> */}
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Layout;
