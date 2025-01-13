export function AboutSection() {
    return (
      <section id="sobre-mi" className="relative bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            私について <span className="text-red-600">/ Sobre Mí</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Soy un desarrollador apasionado por crear experiencias digitales únicas y memorables. 
                Mi enfoque combina la precisión técnica con la creatividad artística, inspirado en la 
                cultura japonesa y el diseño retro.
              </p>
              <p className="text-lg text-gray-300">
                Como el axolotl, símbolo de adaptabilidad y regeneración, me mantengo en constante 
                evolución, aprendiendo nuevas tecnologías y mejorando mis habilidades.
              </p>
            </div>
            <div className="relative p-5">
              <div className="aspect-square bg-red-600/20 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Axolotl Dev Profile"
                  className="object-cover w-full h-full mix-blend-luminosity"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-red-600 text-white p-4 rounded-lg">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm">años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  