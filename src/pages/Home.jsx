export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Photo */}
      <img
        src="/profile.jpg" // mets ton image dans /public/profile.jpg
        alt="Photo de Nicolas"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-blue-600 dark:border-blue-400"
      />

      {/* Hero */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Salut, je suis <span className="text-blue-600 dark:text-blue-400">Nicolas</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
        Développeur passionné par React, Vite et TailwindCSS.  
        J’aime créer des interfaces modernes, fluides et élégantes.
      </p>

      {/* CTA */}
      <a
        href="/projects"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        Voir mes projets
      </a>

      {/* Compétences */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
          <span className="font-bold">⚛️ React</span>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
          <span className="font-bold">⚡ Vite</span>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
          <span className="font-bold">🎨 TailwindCSS</span>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
          <span className="font-bold">💻 JavaScript</span>
        </div>
      </div>
    </section>
  );
}