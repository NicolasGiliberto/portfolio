import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
  {
    title: "Destin",
    description: "Projet réalisé en stage où l'objectif était de créer une application mettant en relation les élèves de 3ème et les entreprises dans le cadre de leur stage de une semaine.",
    tech: ["React Native", "NodeJS", "Javascript"],
    github: "https://github.com/Arseid/Stage_DUT_Reseau_Social_ReactNative",
    image: "/images/projet1.png", // mets ton image dans /public/images/
  },
  {
    title: "OlympicFlameRun",
    description: "Projet réalisé dans le cadre d'un concours BabylonJS, le thème étant les jeux olympiques",
    tech: ["Javascript", "BabylonJS"],
    github: "https://github.com/jolyjonathan/-OlympicFlameRun",
    image: "/images/portfolio.png",
  },
   {
    title: "EshoopA",
    description: "Projet Android studio, application de e-commerce fictive",
    tech: ["Java", "HTMLS", "CSS"],
    github: "https://github.com/jolyjonathan/EshoopA",
    image: "/images/portfolio.png",
  },
  {
    title: "Portfolio",
    description: "Ce site !",
    tech: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/NicolasGiliberto/portfolio",
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