import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-2xl font-['Pacifico'] text-primary">
            HobbyHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/groups" label="All Groups" />
            {user && <NavItem to="/createGroup" label="Create Group" />}
            {user && <NavItem to="/myGroups" label="My Groups" />}
          </div>

          {/* Desktop Auth/User */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login">
                  <button className="bg-white text-primary border border-primary px-4 py-2 text-sm rounded-button hover:bg-gray-50">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-primary text-white px-4 py-2 text-sm rounded-button hover:bg-primary/90">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border"
                />
                <div className="absolute top-12 right-0 bg-white border rounded shadow-md px-4 py-2 text-sm hidden group-hover:block">
                  <p>{user.displayName || "User"}</p>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 mt-2 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <i className="ri-menu-line ri-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded shadow px-4 py-3 space-y-2">
            <Link to="/" className="block text-gray-900 hover:text-primary">Home</Link>
            <Link to="/groups" className="block text-gray-900 hover:text-primary">All Groups</Link>
            {user && <Link to="/createGroup" className="block text-gray-900 hover:text-primary">Create Group</Link>}
            {user && <Link to="/myGroups" className="block text-gray-900 hover:text-primary">My Groups</Link>}
            <hr className="my-1" />
            {!user ? (
              <>
                <Link to="/login" className="block text-primary font-medium">Log in</Link>
                <Link to="/register" className="block text-white bg-primary rounded-button text-center py-2 hover:bg-primary/90">Register</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-red-600 hover:underline text-left"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
