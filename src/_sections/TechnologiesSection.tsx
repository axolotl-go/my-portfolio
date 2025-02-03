import Section from "@/components/Section";

export function TechnologiesSection() {
  const technologies = [
    {
      name: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    { name: "Backend", items: ["Golang", "Node.js", "Python"] },
    { name: "Databases", items: ["SQL", "SQLite", "PostgreSQL", "MongoDB"] },
    { name: "DevOps", items: ["Docker", "Git"] },
  ];

  return (
    <Section title="Tecnologías" titleJapanese="技術" contact="tecnologias">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((category) => (
          <div
            key={category.name}
            className="p-6 border border-red-600/30 hover:border-red-600 transition-colors rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-4 text-red-600">
              {category.name}
            </h3>
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
    </Section>
  );
}
