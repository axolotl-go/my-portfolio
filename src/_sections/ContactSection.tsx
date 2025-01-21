import { Button } from "@/components/Button";
import { Input, Textarea } from "@/components/Input";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";

const contactDetails = [
  { icon: BiMailSend, text: "hello@axolotldev.com", label: "Correo electrónico" },
  { icon: BiPhone, text: "+52 (123) 456-7890", label: "Número de teléfono" },
  { icon: BiMapPin, text: "Ciudad de México, México", label: "Ubicación" },
];

export function ContactSection() {
  return (
    <section id="contacto" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          連絡 <span className="text-red-600">/ Contacto</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">
              ¡Hablemos de tu proyecto!
            </h3>
            <p className="text-gray-300">
              Estoy disponible para freelance, colaboraciones y oportunidades
              laborales. No dudes en contactarme para discutir tu proyecto.
            </p>
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, text, label }, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <span aria-label={label}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <form
            className="space-y-6"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   alert("Formulario enviado.");
            // }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <Input
                  type="text"
                  id="name"
                  aria-label="Nombre"
                  
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  aria-label="Correo electrónico"
                 
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                rows={6}
                aria-label="Mensaje"
              />
            </div>
            <Button as="fullPrimary">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
