import { Github } from "lucide-react";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 min-h-[220px]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition"
                    aria-label={`GitHub – ${item.title}`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
