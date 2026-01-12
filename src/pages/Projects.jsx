import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
  {
    title: "Mon premier projet",
    description: "Un petit projet pour tester React et Tailwind.",
    tech: ["React", "TailwindCSS"],
    link: "#",
    github: "#",
    image: "/images/projet1.png", // mets ton image dans /public/images/
  },
  {
    title: "Portfolio",
    description: "Le site que tu es en train de construire.",
    tech: ["React", "Vite", "TailwindCSS"],
    link: "#",
    github: "#",
    image: "/images/portfolio.png",
  },
];

  return (
    <section className="min-h-screen px-6 py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Mes <span className="text-blue-600 dark:text-blue-400">Projets</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}