export default function About() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        À <span className="text-blue-600 dark:text-blue-400">propos</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Photo */}
        <img
          src="images/nicolas.png"
          alt="Photo de Nicolas"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-600 dark:border-blue-400"
        />

        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Salut, moi c’est Nicolas 👋</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Salut, moi c’est Nicolas 👋
Je suis un développeur web passionné, actuellement en apprentissage, et j’aime créer des interfaces modernes, intuitives et agréables à utiliser. J’aime comprendre comment les choses fonctionnent, construire des projets concrets et progresser un peu plus chaque jour.
J’ai obtenu un Bac S mention Bien, section européenne, puis j’ai poursuivi mes études en BUT Informatique. Cette formation m’a permis de travailler sur des projets variés, d’apprendre à collaborer en équipe et de développer une vraie rigueur technique.
On me décrit souvent comme quelqu’un de sérieux, persévérant et assidu. J’aime aller au bout des choses, apprendre en faisant, résoudre des problèmes et transformer des idées en expériences visuelles propres et efficaces.

          </p>

          {/* Compétences */}
          <h3 className="text-xl font-semibold mb-3">Compétences</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Vite", "TailwindCSS", "JavaScript", "HTML / CSS", "Git / GitHub", "React Native", "SQL", "Excel", "VBA", "Java", "Python"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-blue-100 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Mes hobbies */}
          <h3 className="text-xl font-semibold mb-3">Mes hobbies</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Guitare classique</li>
            <li>Composition de musiques</li>
            <li>Jeux vidéos</li>
            <li>Football</li>
            <li>Course à pied</li>
          </ul>
        </div>
      </div>
    </section>
  );
}