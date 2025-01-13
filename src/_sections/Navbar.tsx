import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 border-b border-red-600">
    <div className="container mx-auto px-4">
      <div className=" flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-red-600 tracking-wider">
          アクソロトル
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        <button className="md:hidden text-red-600">
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </nav>
  )
}

function NavLinks() {
  return (
    <>
      {['Sobre mí', 'Proyectos', 'Tecnologías', 'Precios', 'Contacto'].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="text-white hover:text-red-600 transition-colors"
        >
          {item}
        </Link>
      ))}
    </>
  )
}

