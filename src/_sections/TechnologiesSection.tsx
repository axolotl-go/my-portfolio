export function TechnologiesSection() {
    const technologies = [
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
      { name: "DevOps", items: ["Docker", "AWS", "Git", "CI/CD"] },
      { name: "Diseño", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] }
    ]
  
    return (
      <section id="tecnologías" className="relative bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            技術 <span className="text-red-600">/ Tecnologías</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category) => (
              <div
                key={category.name}
                className="p-6 border border-red-600/30 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-red-600">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  