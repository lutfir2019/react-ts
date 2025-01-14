import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "@/constants/routes";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
