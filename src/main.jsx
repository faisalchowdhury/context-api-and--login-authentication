import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.Jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import PrivateRouter from "./PrivateRouter/PrivateRouter.jsx";
import Order from "./Pages/Order.jsx";
import Profile from "./Pages/Profile.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "registration",
        Component: Registration,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "order",
        element: (
          <PrivateRouter>
            <Order></Order>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
