import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
import { Navigate, RouteObject } from "react-router-dom";

export const main: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
];

const auth: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="login" replace />,
  },
  {
    path: "login",
    element: <div>Login Page</div>,
  },
  {
    path: "register",
    element: <div>Register Page</div>,
  },
];

export const routes: RouteObject[] = [
  // main page
  {
    path: "/", // Root path untuk layout global
    element: <Layout />, // Layout sebagai wrapper
    children: main,
  },
  // auth page
  {
    path: "auth",
    children: auth,
  },
  // not found page
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];