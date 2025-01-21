"use client";
import WavePattern from "./WavePattern";
import { Button } from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden ">
      <WavePattern />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-red-600">Axolotl</span> Dev
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            デベロッパー • クリエイター • イノベーター
          </p>
          <div className="space-x-4">
            <Button link="#proyectos">
              Ver Proyectos
            </Button>

            <Button link="#contacto">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
