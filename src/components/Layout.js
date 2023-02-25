import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div id="content">
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
