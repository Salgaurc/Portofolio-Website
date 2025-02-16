/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router";
// import styles from './AppLayout.module.css'

function AppLayout() {
  return (
        <main className="flex-grow">
         <Outlet />
        </main>
  );
};

export default AppLayout;


