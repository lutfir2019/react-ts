import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./composables/routes";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
