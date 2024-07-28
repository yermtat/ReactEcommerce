import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet className="outlet" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
