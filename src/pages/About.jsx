export default function About() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        À <span className="text-blue-600 dark:text-blue-400">propos</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Photo */}
        <img
          src="/profile.jpg" // mets ton image dans /public/profile.jpg
          alt="Photo de Nicolas"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-600 dark:border-blue-400"
        />

        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Salut, moi c’est Nicolas 👋</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Je suis un développeur front-end en apprentissage, passionné par la création
            d’interfaces modernes, propres et intuitives. J’aime comprendre comment les
            choses fonctionnent, construire des projets concrets, et progresser un peu
            plus chaque jour.
          </p>

          {/* Compétences */}
          <h3 className="text-xl font-semibold mb-3">Compétences</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Vite", "TailwindCSS", "JavaScript", "HTML / CSS", "Git / GitHub"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-blue-100 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Ce que j’aime faire */}
          <h3 className="text-xl font-semibold mb-3">Ce que j’aime faire</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Construire des projets concrets et utiles</li>
            <li>Expérimenter avec UI/UX et design moderne</li>
            <li>Apprendre de nouvelles technos et frameworks</li>
            <li>Partager mes projets et progresser chaque jour</li>
          </ul>
        </div>
      </div>
    </section>
  );
}