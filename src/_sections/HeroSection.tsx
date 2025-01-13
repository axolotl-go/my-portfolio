"use client"
import { useRouter } from "next/navigation";
import WavePattern from "./WavePattern";

export default function HeroSection() {
  const navigation = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
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
              <button onClick={() => navigation.push("/#proyectos") } className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">
              Ver Proyectos
            </button>
            <button onClick={() => navigation.push("/#contacto")} className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded-lg">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

