// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Github, ExternalLink } from 'lucide-react'

import { Link } from "@/components/Link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export function ProjectsSection() {
  const projects = [
    {
      title: "FreedevTube",
      description:
        "Plataforma de cursos gratis impartidos por creadores de contenido sobre desarrollo de software, diseño, ciberseguridad y más.",
      image: "/FreeDevTube.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      github: "https://github.com/dantech99/FreedevTube",
      live: "https://www.freedeves.tech/",
    },
    {
      title: "RecyclingBikes",
      description:
        "Recycling Bikes es una plataforma para comprar y vender bicicletas, con más de 12,000 opciones. Ofrecen atención personalizada, pagos seguros y flexibles, y se enfocan en la transparencia y seguridad. ",
      image: "/RecyclingBikes.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Postgresql"],
      github: "https://github.com/Recycling-Bikes/recycling-web",
      live: "https://www.recyclingbikes.co/",
    },
    {
      title: "Recipes Go",
      description:
        "Recipes Go es una aplicación diseñada para hacer que la cocina sea accesible y emocionante. Ofrece una amplia variedad de recetas, desde tradicionales hasta innovadoras, con instrucciones claras, videos tutoriales y consejos prácticos. ",
      image: "/recipesGo.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Golang", "Postgresql"],
      github: "https://github.com/axolotl-go/Recipes-Go",
      live: "https://recipes-go.vercel.app/",
    },
  ];

  return (
    <section id="proyectos" className="relative bg-black/95 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          プロジェクト <span className="text-red-600">/ Proyectos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black border border-red-600 text-white p-4 rounded-lg"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link target="_blank" rel="noopener noreferrer" href={project.github}>
                  <FaGithub size={20} />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={project.live}>
                  <FiExternalLink size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
