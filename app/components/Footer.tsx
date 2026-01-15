export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tight">
            TechEland
          </span>
          <p className="text-slate-600 text-sm mt-1">
            © {new Date().getFullYear()} TechEland Ltd.
          </p>
        </div>
        <div className="flex space-x-8 text-sm font-mono">
          <a
            href="#"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
