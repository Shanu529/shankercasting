import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // Close dropdown outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        className="relative z-50 
                   flex items-center justify-between 
                   px-8 py-4 
                   bg-black 
                   shadow-lg border-b border-gray-800"
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => navigate("/")}
        />

        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-300">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-orange-400 transition duration-300"
          >
            Home
          </li>

          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-orange-400 transition duration-300"
          >
            About
          </li>

          <li
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-orange-400 transition duration-300"
          >
            Contact
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/signup")}
                className="px-5 py-2 rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition duration-300"
              >
                Signup
              </button>

              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition duration-300"
              >
                Login
              </button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-gray-300 hover:text-orange-400 transition duration-300"
              >
                <FaUserCircle size={30} />
              </button>

              {profileOpen && (
                <div
                  className="absolute right-0 top-full mt-3
                             w-56 bg-gray-900 border border-gray-700
                             shadow-2xl rounded-xl p-5
                             z-[60]"
                >
                  <p className="text-sm font-semibold mb-4 text-gray-200">
                    {user.name}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(true)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-gray-300"></span>
            <span className="block w-6 h-[2px] bg-gray-300"></span>
            <span className="block w-6 h-[2px] bg-gray-300"></span>
          </div>
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white
        z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <button onClick={() => setOpen(false)}>×</button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-black text-sm">
          <li
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            Home
          </li>

          <li
            onClick={() => {
              navigate("/about");
              setOpen(false);
            }}
          >
            About
          </li>

          <li
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Contact
          </li>

          {!user ? (
            <>
              <li onClick={() => navigate("/signup")}>Signup</li>
              <li onClick={() => navigate("/login")}>Login</li>
            </>
          ) : (
            <>
              <hr />
              <li className="font-semibold">{user.name}</li>
              <button
                onClick={handleLogout}
                className="bg-[#FF6900] text-white py-2 rounded-lg mt-2"
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
