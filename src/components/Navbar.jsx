import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    setDark(true);
    document.documentElement.classList.add("dark");
  }
}, []);

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow z-50">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Mon Portfolio</h2>

      <ul className="flex gap-6">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300"
          >
            Accueil
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300"
          >
            Projets
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300"
          >
            À propos
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
  onClick={() => setDark(!dark)}
  className="ml-6 px-3 py-1 rounded border transition-all duration-300 hover:scale-110 dark:hover:bg-gray-700 hover:bg-gray-200"
>
  {dark ? "☀️" : "🌙"}
</button>
      
    </nav>
  );
}