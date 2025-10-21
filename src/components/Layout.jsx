import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
