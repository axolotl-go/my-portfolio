import { Button } from "@/components/Button";
import { BiCheck } from "react-icons/bi";

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "599",
      features: [
        "Diseño Responsive",
        "3 Páginas",
        "SEO Básico",
        "1 Mes de Soporte",
      ],
    },
    {
      name: "Profesional",
      price: "999",
      features: [
        "Diseño Responsive",
        "10 Páginas",
        "SEO Avanzado",
        "3 Meses de Soporte",
        "Panel de Administración",
        "Análisis de Datos",
      ],
    },
    {
      name: "Empresarial",
      price: "1999",
      features: [
        "Diseño Personalizado",
        "Páginas Ilimitadas",
        "SEO Premium",
        "6 Meses de Soporte",
        "Panel de Administración",
        "Análisis Avanzado",
        "API Personalizada",
      ],
    },
  ];

  return (
    <section id="precios" className="relative bg-black/95 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          価格 <span className="text-red-600">/ Precios</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-6 border border-red-600/30 rounded-lg backdrop-blur-sm hover:border-red-600 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-600">
                  ${plan.price}
                </span>
                <span className="text-gray-400">/proyecto</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <BiCheck className="h-5 w-5 text-red-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button as="fullPrimary">Seleccionar Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
