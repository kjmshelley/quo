import './App.css';

import Dashboard from './Components/Dashboard';
import Lesson from "./Components/Lesson";
import Header from "./Components/Header";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Verified from './Components/Lesson/Results/Verified';

const router = createBrowserRouter([
  { path: "/", element: <Dashboard />, },
  { path: "/lesson/results/verified", element: <Verified />, },
  { path: "/lesson/:topic", element: <Lesson />, },
]);

function App() {
  return (
    <main className="app">
      <Header />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
