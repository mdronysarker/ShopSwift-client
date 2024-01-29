import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
}
