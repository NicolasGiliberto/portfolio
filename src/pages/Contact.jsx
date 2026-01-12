export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      <p className="text-gray-700 mb-8">
        Tu veux me contacter pour un projet, une collaboration ou simplement discuter ?
        Voici où me trouver.
      </p>

      <div className="flex flex-col gap-4 text-lg">
        <a
          href="mailto:ton-email@example.com"
          className="text-blue-600 hover:underline"
        >
          📧 Email : ton-email@example.com
        </a>

        <a
          href="https://github.com/ton-github"
          target="_blank"
          className="text-gray-800 hover:underline"
        >
          🐙 GitHub : github.com/ton-github
        </a>

        <a
          href="https://www.linkedin.com/in/ton-linkedin"
          target="_blank"
          className="text-blue-700 hover:underline"
        >
          💼 LinkedIn : linkedin.com/in/ton-linkedin
        </a>
      </div>
    </section>
  );
}