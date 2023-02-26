import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Editor from "./Editor";
import "../components/Layout.css";

function Layout() {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <Menu />
        <Editor />
      </section>

      <div id="content">
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
