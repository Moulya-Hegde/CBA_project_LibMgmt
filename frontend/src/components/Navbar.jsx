// src/components/Navbar.jsx
import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition transform duration-200";
  
  const navbarStyle = darkMode ? {backgroundColor: '#3B2F2F', color: '#FAF3E0'} : {backgroundColor: '#FAF3E0', color: '#3B2F2F'};
  const activeStyle = {backgroundColor: 'rgba(193,154,107,0.2)', color: '#C19A6B', transform: 'scale(1.05)'};
  const inactiveStyle = darkMode ? {color: '#FAF3E0'} : {color: '#3B2F2F'};
  const buttonStyle = {backgroundColor: 'rgba(193,154,107,0.2)'};

  return (
    <header className="shadow-lg transition-colors duration-500" style={navbarStyle}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div
                className={`text-2xl font-extrabold tracking-tight bg-clip-text text-transparent 
                "} style={{color: '#C19A6B'}}`}
              >
                📘
              </div>
              <div className="font-semibold text-lg">LibManage</div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <NavLink
                to="/home"
                className={linkBase}
                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              >
                Home
              </NavLink>
              <NavLink
                to="/mybooks"
                className={linkBase}
                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              >
                My Books
              </NavLink>
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-full transform transition-all duration-500 hover:rotate-12"
              style={buttonStyle}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" style={{color: '#C19A6B'}} />
              ) : (
                <MoonIcon className="h-6 w-6" style={{color: '#C19A6B'}} />
              )}
            </button>

            {user && (
              <button
                onClick={handleLogout}
                className="hidden sm:inline-flex px-4 py-2 rounded-lg font-medium transform hover:-translate-y-0.5 transition"
                style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', color: '#3B2F2F'}}
              >
                Logout
              </button>
            )}

            {/* mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md"
                style={buttonStyle}
                aria-label="Toggle menu"
              >
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            <NavLink
              to="/home"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded"
              style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/mybooks"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded"
              style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
            >
              My Books
            </NavLink>
            {user && (
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="w-full text-left px-3 py-2 rounded"
                style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', color: '#3B2F2F'}}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
