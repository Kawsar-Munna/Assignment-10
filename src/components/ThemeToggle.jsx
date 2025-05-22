import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`w-16 h-8 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 border-2 ${
        darkMode ? "bg-gray-800 border-white" : "bg-white border-black"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
          darkMode ? "translate-x-8 bg-yellow-400" : "translate-x-0 bg-black"
        }`}
      >
        {darkMode ? <FaMoon className="text-black" /> : <FaSun className="text-yellow-300" />}
      </div>
    </div>
  );
};

export default ThemeToggle;
