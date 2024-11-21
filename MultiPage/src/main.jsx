import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Heading from "./components/Heading";
import Guide from "./components/Guide.jsx";
import Config from "./components/Config.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Heading />
        <hr />
        <App />
      </>
    ),
  },
  {
    path: "/guide",
    element: (
      <>
        <Heading />
        <hr />
        <Guide />
      </>
    ),
  },
  {
    path: "/config",
    element: (
      <>
        <Heading />
        <hr />
        <Config />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
