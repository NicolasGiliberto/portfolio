export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto text-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Me <span className="text-blue-600 dark:text-blue-400">contacter</span>
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Tu veux me contacter pour un projet, une collaboration ou simplement discuter ?  
        Voici où me trouver, ou envoie-moi directement un message via le formulaire.
      </p>

      {/* Liens directs */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-lg">
        <a
          href="mailto:ton-email@example.com"
          className="text-blue-600 hover:underline"
        >
          📧 Email
        </a>
        <a
          href="https://github.com/ton-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ton-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:underline"
        >
          💼 LinkedIn
        </a>
      </div>

      {/* Formulaire */}
      <form className="flex flex-col gap-4 max-w-md mx-auto text-left">
        <input
          type="text"
          placeholder="Nom"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}