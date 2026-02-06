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
          href="mailto:nicogili.giliberto@gmail.com"
          className="text-blue-600 hover:underline"
        >
          📧 Email
        </a>
        <a
          href="https://github.com/NicolasGiliberto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-giliberto-b24aa622a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:underline"
        >
          💼 LinkedIn
        </a>
      </div>

      {/* Formulaire */}
      <form
  action="https://formsubmit.co/nicogili.giliberto@gmail.com"
  method="POST"
  className="flex flex-col gap-4 max-w-md mx-auto text-left"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <input
    type="text"
    name="name"
    placeholder="Nom"
    required
    className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <textarea
    name="message"
    placeholder="Message"
    rows="4"
    required
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