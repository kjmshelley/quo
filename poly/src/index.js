import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './Components/Dashboard';
import Lesson from "./Components/Lesson";
import Header from "./Components/Header";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/dashboard", element: <Dashboard />, },
  { path: "/lesson/:topic", element: <Lesson />, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className="App">
      <Header />
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
