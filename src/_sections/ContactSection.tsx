"use client";

import { Button } from "@/components/Button";
import { Input, Textarea } from "@/components/Input";
import Section from "@/components/Section";
import { useState, ChangeEvent, FormEvent } from "react";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";

interface ContactDetail {
  icon: React.ElementType;
  text: string;
  label: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: BiMailSend,
    text: "Axo.dev@outlook.com",
    label: "Correo electrónico",
  },
  { icon: BiPhone, text: "+52 (871) 590-7101", label: "Número de teléfono" },
  { icon: BiMapPin, text: "Coahuila de Zaragoza, México", label: "Ubicación" },
];

interface FormData {
  name: string;
  email: string;
  content: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://my-portfolio-back-production-d76b.up.railway.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      
      setFormData({ name: "", email: "", content: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section title="Contact" titleJapanese="連絡"  contact="contacto">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">¡Hablemos de tu proyecto!</h3>
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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <Input onChange={handleChange} type="text" id="name" name="name" value={formData.name} aria-label="Nombre" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input onChange={handleChange} type="email" id="email" name="email" value={formData.email} aria-label="Correo electrónico" />
            </div>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <Textarea onChange={handleChange} id="content" name="content" rows={6} value={formData.content} aria-label="Mensaje" />
          </div>
          
          <Button as="fullPrimary">
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </div>
    </Section>
  );
}