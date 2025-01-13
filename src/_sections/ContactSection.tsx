import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi'

export function ContactSection() {
  return (
    <section id="contacto" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          連絡 <span className="text-red-600">/ Contacto</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-4">¡Hablemos de tu proyecto!</h3>
            <p className="text-gray-300">
              Estoy disponible para freelance, colaboraciones y oportunidades laborales.
              No dudes en contactarme para discutir tu proyecto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <BiMailSend className="h-5 w-5 text-red-600" />
                <span>hello@axolotldev.com</span>
              </div>
              <div className="flex items-center gap-4">
                <BiPhone className="h-5 w-5 text-red-600" />
                <span>+52 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <BiMapPin className="h-5 w-5 text-red-600" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-red-600/30 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-red-600/30 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 bg-white/5 border border-red-600/30 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

