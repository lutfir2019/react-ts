import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import { getToken, logout } from "@/features/auth/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { RootState } from "@/features/store";

export default function Layout() {
  const { token } = useSelector((state: RootState) => state.useAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function handleLogout() {
    dispatch(logout());
    return navigate("/auth/login", { replace: true });
  }

  // middleware
  dispatch(getToken());
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-center gap-3 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside style={{ width: "20%", backgroundColor: "#f0f0f0" }}>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <main style={{ flexGrow: 1, padding: "1rem" }}>
          {/* Placeholder for the nested routes */}
          <Outlet />
        </main>
      </div>

      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}
