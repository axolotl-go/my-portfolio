// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Github, ExternalLink } from 'lucide-react'

import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

export function ProjectsSection() {
  const projects = [
    {
      title: "Project Neo",
      description: "Aplicación web fullstack con diseño cyberpunk",
      image: "https://kzmoqivoq162002c3lti.lite.vusercontent.net/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Retro Chat",
      description: "Chat en tiempo real con estética retro",
      image: "https://kzmoqivoq162002c3lti.lite.vusercontent.net/placeholder.svg?height=200&width=300",
      tech: ["React", "Firebase", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Pixel Art Maker",
      description: "Herramienta de creación de pixel art",
      image: "https://kzmoqivoq162002c3lti.lite.vusercontent.net/placeholder.svg?height=200&width=300",
      tech: ["JavaScript", "Canvas", "WebGL"],
      github: "#",
      live: "#"
    }
  ]

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
          className="bg-black border border-red-600/50 text-white p-4 rounded-lg"
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
                className="px-2 py-1 text-xs rounded-full border border-red-600 text-red-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              className="text-white/70 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />

            </a>
            <a
              href={project.live}
              className="text-white/70 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  )
}

