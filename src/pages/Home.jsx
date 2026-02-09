export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Photo */}
      <img
        src="images/nicolas.png" 
        alt="Photo de Nicolas"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-blue-600 dark:border-blue-400"
      />

      {/* Hero */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Salut, je suis <span className="text-blue-600 dark:text-blue-400">Nicolas</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
        Développeur web en progression constante, passionné par la création d’interfaces modernes et la découverte de nouvelles technologies. J’aime comprendre, expérimenter et améliorer chaque projet.
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
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">📱 React Native</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">📊 Excel</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">🗄️ SQL</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">⚙️ VBA</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">☕ Java</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">🐍 Python</span>
</div>

<div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
  <span className="font-bold">🟢 Node.js</span>
</div>
      </div>
    </section>
  );
}