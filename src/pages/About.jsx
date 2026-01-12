export default function About() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-center">À propos</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Photo (optionnelle) */}
        <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Photo
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Salut, moi c’est Nicolas</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Je suis un développeur front-end en apprentissage, passionné par la création
            d’interfaces modernes, propres et intuitives. J’aime comprendre comment les
            choses fonctionnent, construire des projets concrets, et progresser un peu
            plus chaque jour.
          </p>

          <h3 className="text-xl font-semibold mb-3">Compétences</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li>React</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>JavaScript</li>
            <li>HTML / CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}