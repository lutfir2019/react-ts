import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Root path untuk layout global
      element: <Layout />, // Layout sebagai wrapper
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <div>Login Page</div>,
        },
        {
          path: "register",
          element: <div>Register Page</div>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 - Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
