import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside style={{ width: "20%", backgroundColor: "#f0f0f0" }}>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
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
