import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/" className="text-gray-900 hover:text-primary font-medium">Home</Link>
            <Link to="/groups" className="text-gray-500 hover:text-primary font-medium">All Groups</Link>
            <Link to="/create-group" className="text-gray-500 hover:text-primary font-medium">Create Group</Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="bg-white text-primary border border-primary px-4 py-2 text-sm rounded-button hover:bg-gray-50">Log in</button>
            </Link>
            <Link to="/register">
              <button className="bg-primary text-white px-4 py-2 text-sm rounded-button hover:bg-primary/90">Register</button>
            </Link>
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
            <Link to="/create-group" className="block text-gray-900 hover:text-primary">Create Group</Link>
            <hr className="my-1" />
            <Link to="/login" className="block text-primary font-medium">Log in</Link>
            <Link to="/register" className="block text-white bg-primary rounded-button text-center py-2 hover:bg-primary/90">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
