import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./roots/Root.tsx";
import Dashboard from "./roots/Dashboard.tsx";
import Docs from "./roots/Docs.tsx";
import Settings from "./roots/Settings.tsx";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "docs", element: <Docs /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ],
  {
    basename: "/rtk_query-med-card-app",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
