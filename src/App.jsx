/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import AppLayout from './components/AppLayout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <PageNotFound />, //. implement this component
    children: [
      {path: '/', element: <Dashboard />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
