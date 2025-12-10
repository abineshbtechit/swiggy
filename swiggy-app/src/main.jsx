import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Front from "./Front.jsx";
import Signup from "./signup.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chatcart from "./Chatcart.jsx";
import Signin from './signin';
import Parter from "./Parter.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Front />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:"/aboutchatcart",
    element:<Chatcart/>
  },
  {
    path:"/signin",
    element:<Signin/>
  
  },
  {
    path:"/partner",
    element:<Parter/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
