import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import "../styles/MainLayout.css";

function MainLayout() {
  return (
    <main>
      <AppBar />
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
