import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 pt-24 px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}

