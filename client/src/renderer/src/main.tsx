import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// import relevant pages
import Overview from "./pages/Overview";
import Logging from "./pages/Logging";

const router = createBrowserRouter([
  { path: "/", element: <Overview /> },
  { path: "/logging", element: <Logging /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
