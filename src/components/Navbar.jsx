import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Charger le thème au démarrage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Appliquer le thème
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
    <nav className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-md bg-white/70 dark:bg-gray-800/70
      shadow-sm border-b border-gray-200/50 dark:border-gray-700/50
      px-8 py-4 flex justify-between items-center
      transition-colors duration-300
    ">
      {/* Logo */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
        Mon Portfolio
      </h2>

      {/* Liens */}
      <ul className="flex gap-8 text-lg">
        {[
          { to: "/", label: "Accueil" },
          { to: "/projects", label: "Projets" },
          { to: "/about", label: "À propos" },
          { to: "/contact", label: "Contact" },
        ].map((item, i) => (
          <li key={i}>
            <Link
              to={item.to}
              className="
                text-gray-700 dark:text-gray-200
                hover:text-blue-600 dark:hover:text-blue-400
                transition-colors duration-200
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Dark Mode */}
      <button
        onClick={() => setDark(!dark)}
        className="
          ml-6 w-12 h-6 flex items-center rounded-full
          bg-gray-300 dark:bg-gray-700
          transition-all duration-300 relative
        "
      >
        <span
          className={`
            w-5 h-5 bg-white rounded-full shadow absolute
            transform transition-all duration-300
            ${dark ? "translate-x-6" : "translate-x-1"}
          `}
        ></span>
      </button>
    </nav>
  );
}