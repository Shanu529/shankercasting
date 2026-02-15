import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  //
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64
          bg-gray-900 text-white flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-3 text-sm overflow-y-auto">
          <Link to="/admin/dashboard" className="block hover:bg-gray-800 p-3 rounded">
            Dashboard Overview
          </Link>

          <Link to="/admin/create-blog" className="block hover:bg-gray-800 p-3 rounded">
            Create Blog
          </Link>

          <Link to="/admin/blogs" className="block hover:bg-gray-800 p-3 rounded">
            All Blogs
          </Link>

          <Link to="/admin/contacts" className="block hover:bg-gray-800 p-3 rounded">
            Contacts
          </Link>

          <Link to="/admin/newsletter" className="block hover:bg-gray-800 p-3 rounded">
            Newsletter Subscribers
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
          © 2026 Admin System
        </div>
      </aside>

      
      <div className="md:ml-64 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-800"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>

            <h1 className="text-lg md:text-xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
          </div>

          
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
