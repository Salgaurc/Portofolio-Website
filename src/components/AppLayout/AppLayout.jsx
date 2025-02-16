/* eslint-disable no-unused-vars */
import React from "react";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Nav";
// import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
      <BackgroundAnimation />
        <main className="flex-grow">
         <Outlet />
        </main>
    </div>
  );
};

export default AppLayout;


