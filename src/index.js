import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import IndexPT from "./portugues/indexPT";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portuguese",
    element: <IndexPT />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
