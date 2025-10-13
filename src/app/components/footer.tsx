import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Awang Syahsiah Adyatma</span>. All rights reserved.
        </p>

        <div className="flex gap-6 justify-center">
            <a href="https://github.com/" target="_blank" className="hover:text-indigo-600 transition-transform duration-200 hover:-translate-y-1">
                <Github size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-600 transition-transform duration-200 hover:-translate-y-1">
                <Linkedin size={22} />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-indigo-600 transition-transform duration-200 hover:-translate-y-1">
                <Mail size={22} />
            </a>
        </div>
      </div>
    </footer>
  );
}
