export default function ProjectCard({ title, description, tech, link, github, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}

      {/* Titre */}
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm rounded bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-blue-100"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Boutons */}
      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            Démo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded bg-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}