// import Image from "next/image";
import Me from "../../public/Me.jpg";

import Section from "@/components/Section";
import Image from "next/image";

export function AboutSection() {
    return (
      <Section title="Sobre Mí" titleJapanese="私について" contact="sobre-mi" >
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              Soy Javier, desarrollador full-stack con experiencia en Go, JavaScript, TypeScript y C#. Me especializo en crear aplicaciones escalables y funcionales, abarcando desde el backend hasta el frontend. Estoy comprometido con la mejora continua y el aprendizaje de nuevas tecnologías para aportar soluciones innovadoras y de alto impacto.
              </p>
            </div>
            <div className="relative p-5">
              <div className="aspect-square bg-red-600/20 rounded-lg overflow-hidden">
                <Image
                  src={Me}
                  alt="Axolotl Dev Profile"
                  className="object-cover w-full h-full mix-blend-"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 border border-red-600 bg-black text-white p-4 rounded-lg">
                <p className="text-4xl font-bold">3+</p>
                <p className="text-sm">años de experiencia</p>
              </div>
            </div>
          </div>
      </Section>
    )
  }
  
  